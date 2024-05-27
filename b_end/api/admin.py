from django.contrib import admin

# Register your models here.
from .models import Customer, Size, Category, Product, Order, OrderItem, ShippingAddress


admin.site.register(Customer)
admin.site.register(Category)
admin.site.register(Product)
admin.site.register(Size)


class OrderItemInline(admin.TabularInline):
    model = OrderItem


class ShippingAddressInline(admin.StackedInline):
    model = ShippingAddress
    exclude = ('customer',)


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    inlines = [OrderItemInline, ShippingAddressInline]
