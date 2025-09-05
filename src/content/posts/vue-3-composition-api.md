# Vue 3 Composition API: A Modern Approach to Component Logic

## Introduction
Vue 3's Composition API represents a significant shift in how we organize and reuse component logic. This article explores its benefits and practical applications through detailed examples and real-world scenarios.

## Why Composition API?
- **Better Code Organization**: Logic is grouped by feature rather than options
- **Improved Type Inference**: Better TypeScript support
- **Enhanced Reusability**: Logic can be extracted into composables
- **Easier Testing**: Isolated logic is easier to test
- **Better Performance**: More efficient reactivity system

## Basic Usage Example
```javascript
import { ref, computed, onMounted, watch } from 'vue'

export default {
  setup() {
    // Reactive state
    const count = ref(0)
    const name = ref('Vue 3')
    
    // Computed property
    const doubleCount = computed(() => count.value * 2)
    
    // Methods
    const increment = () => {
      count.value++
    }
    
    // Lifecycle hooks
    onMounted(() => {
      console.log('Component mounted')
    })
    
    // Watchers
    watch(count, (newValue, oldValue) => {
      console.log(`Count changed from ${oldValue} to ${newValue}`)
    })
    
    return {
      count,
      name,
      doubleCount,
      increment
    }
  }
}
```

## Advanced Features

### Composables
```javascript
// useCounter.js
import { ref, computed } from 'vue'

export function useCounter(initialValue = 0) {
  const count = ref(initialValue)
  
  const increment = () => count.value++
  const decrement = () => count.value--
  const reset = () => count.value = initialValue
  
  const isEven = computed(() => count.value % 2 === 0)
  
  return {
    count,
    increment,
    decrement,
    reset,
    isEven
  }
}

// Component usage
import { useCounter } from './useCounter'

export default {
  setup() {
    const { count, increment, isEven } = useCounter(10)
    
    return {
      count,
      increment,
      isEven
    }
  }
}
```

### TypeScript Integration
```typescript
import { defineComponent, ref, computed } from 'vue'

interface User {
  id: number
  name: string
  email: string
}

export default defineComponent({
  setup() {
    const users = ref<User[]>([])
    const selectedUser = ref<User | null>(null)
    
    const userCount = computed(() => users.value.length)
    
    const addUser = (user: User) => {
      users.value.push(user)
    }
    
    return {
      users,
      selectedUser,
      userCount,
      addUser
    }
  }
})
```

## Real-World Example: Todo Application

```javascript
// useTodos.js
import { ref, computed } from 'vue'

export function useTodos() {
  const todos = ref([])
  const filter = ref('all')
  
  const addTodo = (text) => {
    todos.value.push({
      id: Date.now(),
      text,
      completed: false
    })
  }
  
  const toggleTodo = (id) => {
    const todo = todos.value.find(t => t.id === id)
    if (todo) {
      todo.completed = !todo.completed
    }
  }
  
  const filteredTodos = computed(() => {
    switch (filter.value) {
      case 'active':
        return todos.value.filter(t => !t.completed)
      case 'completed':
        return todos.value.filter(t => t.completed)
      default:
        return todos.value
    }
  })
  
  return {
    todos,
    filter,
    addTodo,
    toggleTodo,
    filteredTodos
  }
}

// TodoList.vue
<template>
  <div>
    <input v-model="newTodo" @keyup.enter="addTodo(newTodo)" />
    <select v-model="filter">
      <option value="all">All</option>
      <option value="active">Active</option>
      <option value="completed">Completed</option>
    </select>
    <ul>
      <li v-for="todo in filteredTodos" :key="todo.id">
        <input type="checkbox" :checked="todo.completed" @change="toggleTodo(todo.id)" />
        {{ todo.text }}
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useTodos } from './useTodos'

export default {
  setup() {
    const newTodo = ref('')
    const { filter, addTodo, toggleTodo, filteredTodos } = useTodos()
    
    return {
      newTodo,
      filter,
      addTodo,
      toggleTodo,
      filteredTodos
    }
  }
}
</script>
```

## Performance Optimization

### Using `shallowRef` for Large Objects
```javascript
import { shallowRef } from 'vue'

export default {
  setup() {
    // Only tracks changes to the reference itself
    const largeObject = shallowRef({
      // ... large nested object
    })
    
    return { largeObject }
  }
}
```

### Computed Caching
```javascript
import { computed } from 'vue'

export default {
  setup() {
    const expensiveComputation = computed(() => {
      // This will only recompute when dependencies change
      return heavyCalculation()
    })
    
    return { expensiveComputation }
  }
}
```

## Best Practices
1. **Keep Setup Function Clean**
   - Extract complex logic into composables
   - Group related logic together
   - Use meaningful variable names

2. **Use Composables for Reusable Logic**
   - Create small, focused composables
   - Document composable parameters and return values
   - Consider TypeScript for better type safety

3. **Performance Considerations**
   - Use `shallowRef` for large objects
   - Leverage computed properties for caching
   - Be mindful of reactivity overhead

4. **Testing Strategy**
   - Test composables in isolation
   - Mock dependencies when needed
   - Use Vue Test Utils for component testing

## Conclusion
The Composition API offers a more flexible and maintainable way to build Vue applications. By following these patterns and best practices, you can create more robust and scalable applications.

Remember:
- Start with simple components
- Extract reusable logic into composables
- Use TypeScript for better type safety
- Consider performance implications
- Write tests for your composables 