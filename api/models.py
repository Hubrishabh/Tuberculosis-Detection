from django.db import models


class UserProfile(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100)
    gender = models.CharField(max_length=10, choices=[('Male', 'Male'), ('Female', 'Female')])
    dob = models.DateField(null=True, blank=True)
    phone = models.CharField(max_length=15)
    country = models.CharField(max_length=50)

    def __str__(self):
        return self.name
