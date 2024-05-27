## Django Models Explanation

This code defines several Django models that represent different entities in a web application.

### Customer Model

- **Attributes**:
  - `user`: One-to-one relationship with the built-in `User` model from `django.contrib.auth.models`, representing a customer user.
  - `name`: CharField for the customer's name.
  - `phone_number`: PhoneNumberField for the customer's phone number.

### Category Model

- **Attributes**:
  - `name`: CharField for the name of a product category.

### Size Model

- **Attributes**:
  - `name`: CharField for the size of a product.

### Product Model

- **Attributes**:
  - `name`: CharField for the name of a product.
  - `description_short`: CharField for a short description of the product.
  - `description`: TextField for a detailed description of the product.
  - `price`: DecimalField for the price of the product.
  - `category`: ForeignKey relationship with the `Category` model, specifying the category of the product.
  - `image`: ImageField for the product image.
  - `isFeaturing`: BooleanField indicating if the product is featured.
  - `available`: BooleanField indicating if the product is available.
  - `sizes`: Many-to-many relationship with the `Size` model, representing available sizes for the product.

### Order Model

- **Attributes**:
  - `customer`: ForeignKey relationship with the `Customer` model, representing the customer who placed the order.
  - `complete`: BooleanField indicating if the order is complete.
  - `date_ordered`: DateTimeField for the date and time when the order was placed.
  - `transaction_id`: CharField for the transaction ID of the order.
  - `items`: Many-to-many relationship with the `Product` model through the `OrderItem` model, representing the products in the order.

### OrderItem Model

- **Attributes**:
  - `product`: ForeignKey relationship with the `Product` model, representing the product in the order item.
  - `order`: ForeignKey relationship with the `Order` model, representing the order the item belongs to.
  - `quantity`: IntegerField for the quantity of the product in the order item.
  - `date_added`: DateTimeField for the date and time when the item was added to the order.
  - `size`: CharField for the size of the product in the order item.

### ShippingAddress Model

- **Attributes**:
  - `customer`: ForeignKey relationship with the `Customer` model, representing the customer who placed the order.
  - `order`: ForeignKey relationship with the `Order` model, representing the order the shipping address belongs to.
  - `address`: CharField for the shipping address.
  - `date_added`: DateTimeField for the date and time when the shipping address was added.

### Signal Receiver

- A signal receiver function is defined to create a token for a user automatically when a new user instance is created.
- This function is connected to the `post_save` signal of the `User` model.

This Django models code defines the structure and relationships of various entities in the application, such as customers, products, orders, and shipping addresses. It also includes a signal receiver function for handling user creation events.