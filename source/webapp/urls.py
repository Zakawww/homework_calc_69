from django.urls import path

from webapp.views import index_view, get_token_view, calculated

app_name = 'webapp'

urlpatterns = [
    path('', index_view),
    path('get_token/', get_token_view, name='get_token_view'),
    path('add/', calculated, name='add'),
    path('subtract/', calculated, name='subtract'),
    path('multiply/', calculated, name='multiply'),
    path('divide/', calculated, name='divide'),
]
