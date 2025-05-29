<template>
    <Form class="w-full flex flex-col gap-2">
        <FormField>
            <InputText type="email" placeholder="Email" class="w-full" />
        </FormField>

        <FormField>
            <Password placeholder="Senha" toggleMask :feedback="false" class="!w-full" />
        </FormField>

        <div class="flex gap-2">
            Ainda não tem uma conta?
            <Button label="Registre-se" variant="link" class="!p-0" @click="emit('jump')" />
        </div>

        <Button class="w-full" severity="primary">
            Entrar
        </Button>
    </Form>
</template>

<script setup>
const emit = defineEmits(['jump'])
</script>

<style scoped>
:deep(.p-inputtext.p-component.p-password-input) {
    width: 100%;
}
</style>