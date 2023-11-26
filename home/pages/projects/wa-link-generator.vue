<template>
  <v-card class="pa-4 pb-0 rounded-lg">
    <v-form ref="form">
      <v-autocomplete
        class="mb-1"
        label="País"
        no-data-text="País não encontrado"
        variant="outlined"
        color="accent"
        :items="countryItems"
        v-model="inputPhoneInfo"
        :rules="[inputRules.requiredField]"
        auto-select-first
        clearable
      >
      </v-autocomplete>
      <v-text-field
        class="mb-1"
        label="Número de telefone"
        variant="outlined"
        color="accent"
        v-model="inputPhoneNumber"
        type="number"
        :rules="[inputRules.requiredField, inputRules.invalidPhoneNumber]"
      ></v-text-field>
      <v-textarea
        label="Mensagem"
        variant="outlined"
        color="accent"
        v-model="inputMessage"
      ></v-textarea>
      <v-btn @click="generateWhatsappUrl" color="primary" block>Gerar link</v-btn>
    </v-form>
    <v-divider class="my-4"></v-divider>
    <v-text-field label="Link" color="accent" variant="outlined" v-model="outputUrl" readonly>
      <template #append-inner>
        <v-icon @click="outputUrlCopyEvent">{{ outputUrlIcon }}</v-icon>
      </template>
    </v-text-field>
  </v-card>
</template>
<script lang="ts" setup>
  import { countries, getEmojiFlag } from "countries-list"
  import type { ICountry, TCountries, TCountryCode } from "countries-list"
  import { isValidPhoneNumber } from "libphonenumber-js"
  import type { CountryCode } from "libphonenumber-js"

  interface PhoneInfo {
    countryPhoneCode: number
    countryCode: TCountryCode
  }
  interface CountryItem {
    title: string
    value: PhoneInfo
  }

  async function copyToClipboard(content: string): Promise<void | never> {
    try {
      await navigator.clipboard.writeText(content)
    } catch (error) {
      throw error
    }
  }

  async function outputUrlCopyEvent(): Promise<void> {
    if (outputUrl.value) {
      try {
        await copyToClipboard(outputUrl.value)
        outputUrlIcon.value = outputIcons.copied
        setTimeout(() => (outputUrlIcon.value = outputIcons.copy), 5000)
      } catch {}
    }
  }

  async function generateWhatsappUrl(): Promise<void> {
    const isFormValid = form.value ? (await form.value.validate()).valid : false

    if (inputPhoneInfo.value && inputPhoneNumber.value && isFormValid) {
      const fullPhoneNumber = `${inputPhoneInfo.value.countryPhoneCode}${inputPhoneNumber.value}`
      const whatsappUrl = new URL(fullPhoneNumber, whatsappUrlData.base)

      if (inputMessage.value) {
        whatsappUrl.searchParams.set(whatsappUrlData.textParam, inputMessage.value)
      }
      outputUrl.value = whatsappUrl.toString()
    }
  }

  function generateCountryItems(countries: TCountries): Array<CountryItem> {
    return Object.entries(countries)
      .flatMap(([code, country]: [string, ICountry]) => {
        return country.phone.map((phone: number) => {
          const countryCode = code as TCountryCode
          const countryName = country.name
          const countryPhoneCode = phone
          const countryEmoji = getEmojiFlag(countryCode)

          return {
            title: `${countryEmoji} ${countryName} +${countryPhoneCode}`,
            value: {
              countryPhoneCode,
              countryCode
            }
          }
        })
      })
      .sort(({ title: a }, { title: b }) => {
        return a < b ? -1 : a > b ? 1 : 0
      })
  }

  const inputErrorMessages = {
    required: "Campo requerido",
    invalidPhoneNumber: "Número de telefone inválido"
  }
  const whatsappUrlData = {
    base: "https://wa.me",
    textParam: "text"
  }
  const outputIcons = {
    copy: "mdi-content-copy",
    copied: "mdi-check-circle"
  }
  const inputRules = {
    requiredField(value: unknown): boolean | string {
      return Boolean(value) || inputErrorMessages.required
    },
    invalidPhoneNumber(value: unknown): boolean | string {
      if (inputPhoneNumber.value && inputPhoneInfo.value) {
        return (
          isValidPhoneNumber(
            inputPhoneNumber.value,
            inputPhoneInfo.value.countryCode as CountryCode
          ) || inputErrorMessages.invalidPhoneNumber
        )
      }
      return inputErrorMessages.invalidPhoneNumber
    }
  }
  const countryItems = generateCountryItems(countries)
  const form = ref<HTMLFormElement>()
  const inputPhoneInfo = ref<PhoneInfo>()
  const inputPhoneNumber = ref<string>()
  const inputMessage = ref<string>()
  const outputUrl = ref<string>()
  const outputUrlIcon = ref<string>(outputIcons.copy)
</script>
