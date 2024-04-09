<template>
    <div>
      <h1>Zahlung mit Stripe</h1>
      <UButton @click="handleCheckout">Jetzt bezahlen</UButton>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';

  const stripe = ref(await useClientStripe());
  
  const handleCheckout = async () => {
    if (!stripe.value) {
      alert('Stripe wird geladen...');
      return;
    }
  
    
    const { error } = await stripe.value.redirectToCheckout({
      lineItems: [{ price: 'price_1P3MrdCzSI00rA1V6hkdzEB8', quantity: 2 }], 
      mode: 'payment',
      successUrl: window.location.origin + '/check',
      cancelUrl: window.location.origin + '/test',
    });
  
    if (error) {
      console.error('Fehler beim Checkout:', error);
    }
  };
  </script>
  
