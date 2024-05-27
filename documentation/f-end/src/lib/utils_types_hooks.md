# Utils

# truncateWithEllipsis Function Explanation

The `truncateWithEllipsis` function is a utility function designed to truncate a given text to a specified maximum length and add an ellipsis ("...") at the end if the text exceeds the maximum length.

## Function Signature

- **Name**: `truncateWithEllipsis`
- **Parameters**:
  - `text`: A string representing the input text that needs to be truncated.
  - `maxLength`: A number representing the maximum length allowed for the text before truncation.
- **Return Type**: `string`
- **Description**: The function takes in two parameters, the `text` to be truncated and the `maxLength` specifying the maximum length allowed. It returns a string that is either the original text or a truncated version with an ellipsis appended if the original text exceeds the maximum length.

## Code Explanation

- The function first checks if the length of the input `text` is greater than the specified `maxLength`.
- If the length of the `text` exceeds `maxLength`, it uses the `substring` method to extract a substring from the beginning of the `text` up to the `maxLength`, and then appends an ellipsis ("...") to indicate that the text has been truncated.
- If the length of the `text` is within the `maxLength` limit, the original `text` is returned without any modifications.

## Example Usage

```typescript
const originalText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
const maxLength = 20;
const truncatedText = truncateWithEllipsis(originalText, maxLength);
console.log(truncatedText); // Output: "Lorem ipsum dolor s..."
```

# Types

# Product Interface Explanation

The `Product` interface represents the structure of a product in your application.

## Properties

1. **id**:

   - Type: `number`
   - Description: Unique identifier for the product.

2. **name**:

   - Type: `string`
   - Description: Name of the product.

3. **description**:

   - Type: `string`
   - Description: Full description of the product.

4. **price**:

   - Type: `string`
   - Description: Price of the product.

5. **image**:

   - Type: `string`
   - Description: URL or path to the image of the product.

6. **description_short**:

   - Type: `string`
   - Description: Short description of the product.

7. **isFeaturing**:

   - Type: `boolean`
   - Description: Indicates whether the product is featured or not.

8. **available**:

   - Type: `boolean`
   - Description: Indicates whether the product is available in stock.

9. **sizes**:

   - Type: `string[]`
   - Description: Array of available sizes for the product.

10. **quantity**:

    - Type: `number`
    - Description: Quantity of the product available.

11. **size**:
    - Type: `string`
    - Description: Selected size for the product.

## Conclusion

The `Product` interface defines the structure of a product object in your application, including its properties such as ID, name, description, price, image URL, availability, sizes, and quantity. It helps ensure consistency and type safety when working with product data throughout your application.

---

# Category Interface Explanation

The `Category` interface represents the structure of a product category in your application.

## Properties

1. **id**:

   - Type: `number`
   - Description: Unique identifier for the category.

2. **name**:

   - Type: `string`
   - Description: Name of the category.

3. **products**:
   - Type: `Product[]`
   - Description: Array of products belonging to the category.

## Conclusion

The `Category` interface defines the structure of a product category, including its ID, name, and an array of products belonging to that category. It helps organize and manage product data within your application, facilitating operations such as displaying products by category and accessing product details within a category.

# Hooks

This TypeScript code defines custom hooks for accessing Redux store functionality in a React application:

````typescript
# Explanation of Custom Redux Hooks

These custom hooks provide convenient ways to interact with the Redux store in your React components.

## `useAppDispatch`

This hook returns the Redux dispatch function with the correct type (`AppDispatch`) inferred from the Redux store.

### Usage:
```typescript
const dispatch = useAppDispatch();
````

## `useAppSelector`

This hook allows selecting data from the Redux store state with type safety. It takes a selector function as an argument and returns the selected state.

### Usage:

```typescript
const selectedData = useAppSelector((state) => state.someSlice.someData);
```

## `useAppStore`

This hook returns the Redux store instance itself. It can be useful in advanced scenarios where direct access to the store is needed, such as subscribing to store changes manually.

### Usage:

```typescript
const store = useAppStore();
```

These custom hooks abstract away the complexities of interacting with the Redux store directly, providing a cleaner and more type-safe approach for managing state in your React components.

```

These hooks enhance the developer experience by simplifying the integration of Redux with React while maintaining type safety and consistency.
```
