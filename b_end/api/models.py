from django.conf import settings
from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token

from phonenumber_field.modelfields import PhoneNumberField
# Create your models here.


class Customer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True)
    name = models.CharField(max_length=50)
    phone_number = PhoneNumberField()

    def __str__(self):
        return self.name


class Category(models.Model):
    name = models.CharField(max_length=25)

    def __str__(self):
        return self.name


class Size(models.Model):
    name = models.CharField(max_length=10)

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=50)
    description_short = models.CharField(
        max_length=320, default='Default description')
    description = models.TextField()
    price = models.DecimalField(max_digits=5, decimal_places=2)
    category = models.ForeignKey(
        Category, related_name='products', on_delete=models.CASCADE)
    image = models.ImageField()
    isFeaturing = models.BooleanField(default=False)
    available = models.BooleanField(default=True)
    sizes = models.ManyToManyField(Size)

    def __str__(self):
        return self.name

    @property
    def imageURL(self):
        try:
            url = self.image.url
        except:
            url = ''
        return url


class Order (models.Model):
    customer = models.ForeignKey(
        Customer, on_delete=models.CASCADE, default=1)
    complete = models.BooleanField(default=False)
    date_ordered = models.DateTimeField(auto_now_add=True)
    transaction_id = models.CharField(max_length=100)
    items = models.ManyToManyField(Product, through='OrderItem')

    def __str__(self):
        return str(self.customer) + " " + str(self.customer.phone_number) + " " + str(self.date_ordered)


class OrderItem(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=0)
    date_added = models.DateTimeField(auto_now_add=True)
    size = models.CharField(max_length=10, default='M')

    def __str__(self):
        return str(self.order)

    @property
    def get_total(self):
        total = self.product.price * self.quantity
        return total


class ShippingAddress(models.Model):
    customer = models.ForeignKey(
        Customer, on_delete=models.SET_NULL, null=True, blank=True)
    order = models.ForeignKey(
        Order, on_delete=models.CASCADE)
    address = models.CharField(max_length=200, null=True)
    date_added = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.address


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_aut_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)
