<script setup lang="ts">

const {t} = useI18n()

const emit = defineEmits(['next', 'disagree'])

const onDisagree = () => {
  emit('disagree')
}
const nextStep = () => {
  emit('next')
}
</script>

<template>
  <div class="flex flex-col gap-6">
    <div class="text-light font-bold text-base lg:text-lg">
      การให้ความยินยอมให้ใช้หรือเปิดเผยข้อมูลส่วนบุคคลของผู้สมัคร
    </div>
    <div class="text-light text-sm lg:text-base">
      เพื่อให้การทำงานของบริษัท เหล็กแผ่นรีดเย็นไทย จำกัด (มหาชน) (“บริษัท”) เป็นไป
      ตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ.2562 ทางบริษัทมีความจำเป็น ต้องขอความ ยินยอมจากท่านในการเก็บรวบรวม ใช้
      และเปิดเผยข้อมูลส่วนบุคคลซึ่ง อยู่ในใบสมัครงาน ดังนั้น ก่อนที่ท่านจะกรอกข้อมูลส่วนตัวของท่านลงในใบสมัครงาน ขอให้ท่านได้ทำการสแกนคิวอาร์โค้ด
      เพื่อศึกษารายละเอียดวัตถุประสงค์ในการเก็บ รวบรวม ใช้ และเปิดเผยข้อมูลส่วนบุคคลก่อน กรณี ที่ท่านไม่ผ่านการพิจารณารับเข้า ทำงาน
      ข้อมูลในใบสมัครจะถูกเก็บรักษาไว้อีกเป็นระยะ เวลา 1 ปี เพื่อพิจารณาความ เหมาะสมกับตำแหน่งงานอื่นหรือโอนส่งต่อข้อมูลส่วนบุคคล
      ของท่านไปยัง บริษัทเครือ กลุ่มเหล็กสหวิริยาเพื่อพิจารณารับสมัครงาน
    </div>
    <div class="w-full h-full flex justify-center">
      <img src="@/public/careers/careers-qr.png" alt="careers qr code">
    </div>
    <div class="flex justify-between">
      <UButton
          class="text-downriver-950 hover:text-downriver-900"
          variant="outline"
          size="lg"
          :label="t('common.disagree')"
          @click="onDisagree"
      />
      <UButton
          form="contact-form"
          type="submit"
          size="lg"
          :label="t('common.agree')"
          class="bg-downriver-950 hover:bg-downriver-900"
          :ui="{variant: {solid: 'disabled:bg-downriver-950 aria-disabled:bg-downriver-950'}}"
          @click="nextStep"
      />
    </div>
  </div>

</template>

<style scoped>

</style>
