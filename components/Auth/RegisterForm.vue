<template>
    <Form class="!w-full grid grid-cols-12 gap-2">
        <FormField class="col-span-6">
            <InputText placeholder="Primeiro Nome" class="w-full" />
        </FormField>

        <FormField class="col-span-6">
            <InputText placeholder="Sobrenome" class="w-full" />
        </FormField>

        <FormField class="col-span-6">
            <DatePicker showIcon iconDisplay="input" placeholder="Data de nascimento" class="w-full" />
        </FormField>

        <FormField class="col-span-6">
            <InputMask mask="(99) 99999-9999" placeholder="(99) 99999-9999" class="w-full" />
        </FormField>

        <FormField class="col-span-12">
            <InputText type="email" placeholder="Email" class="w-full" />
        </FormField>

        <FormField class="col-span-12">
            <Password placeholder="Senha" toggleMask weak-label="Fraca" medium-label="Medio" strong-label="Forte"
                class="w-full" />
        </FormField>

        <div class="flex gap-2 col-span-12">
            Já é cadastrado?
            <Button label="Faça login" type="submit" variant="link" class="!p-0" @click="emit('jump')" />
        </div>

        <Button class="col-span-12" severity="primary">
            Registrar
        </Button>
    </Form>
</template>

<script setup>
const emit = defineEmits(['jump'])

function handleSubmitEvent(){
    
}
</script>

<style scoped>
:deep(.p-inputtext.p-component.p-password-input) {
    width: 100%;
}
</style>