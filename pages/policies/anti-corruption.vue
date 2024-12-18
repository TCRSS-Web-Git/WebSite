<script setup lang="ts">
const {locale} = useI18n()
</script>

<template>
  <UContainer class="my-6 lg:my-24 text-darkest">
    <h1 class="title mb-4 lg:mb-14">{{ $t('policy.anti_corruption') }}</h1>

    <div v-if="locale==='en'">
      <div class="text-sm lg:text-base font-bold">
        message From The President
      </div>

      <div class="paragraph">
        Thai Cold Rolled Steel Sheet Public Company Limited (“the Company”) intends to conduct business with good governance under the framework of good corporate governance. This includes being responsible for society, environment, and stakeholders in order to maintain transparency and fairness.
        <br><br>
        In addition, the company is aware of the importance of the corruption issues in Thailand whether it is in the form of direct and indirect corruption such as giving or accepting bribes, paying for convenience, pursuing improper benefits, etc. These are all obstacles to the country’s economic & social development, and also business competition which decrease the confidence from shareholders, community, and all stakeholders.
        <br><br>
        To be part in solving the corruption issues in the country, the company is determined the declaration of its intention to join the Thailand’s Private Sector Collective Action Coaliation Against Corruption (CAC). The company has already been certified as a member since June 2023.
        <br><br>
        Therefore, the Company would like to request cooperation from directors, executives, employees, and all stakeholders in joining together to be a part in anti-corruption by strictly complying with laws, policies, codes of conduct, regulations, or practices of the company. Being a supporter or promoting any activities, person, or group of people to commit corruption are prohibited. Observing corruption activities and actions shall not be overpassed. This is in response to the stated intention of the company.
      </div>

      <div class="sub-title">
        Anti-Corruption Policy
      </div>
      <div class="paragraph">
        Thai Cold Rolled Steel Sheet Public Company Limited. (“Company”) has realized the importance of Thailand’s corruption problem. As a result, the Company has declared to join Thailand’s Private Sector Collective Action Coaliation Against Corruption (CAC) in order to persuade Directors, Executives, Employees including all stakeholders to involve in an anti-corruption and act in the same direction.
        <br><br>
        According to this policy “Corruption” means the misuse of power by position, whether direct or indirect actions, for acquiring money, assets, or any benefits for the Company, yourself or the others for example; give or receive bribe, other benefits, intimidate for benefit including, give or receive gift, hospitality, sponsorship, donation, political contribution, facilitation payment, revolving door or conflict of interest with public officer except allowed by law, regulation, announcement, rule, local tradition or trade norm.
        <br><br>
        The Anti-Corruption Policy is being made to set the standard of actions and the duty of the related person as follows.
        <ul class="paragraph list-outside list-decimal ps-4">
        <li>The Company has a policy against every form of corruption by supporting Directors, Executives, and Employees on every level to realize the importance, manners and enhance an anti-corruption culture.</li>
        <li>All Directors, Executives, and Employees shall together act against corruption by not process, accept and involve in any forms of corruption including not being a supporter or sponsor of such activity, person or a group that involve in corruption for the sake of themselves, families, friends, relatives, acquaintances or the others.</li>
        <li>All Directors, Executives, and Employees shall exercise its responsible tasks under the policy, rules and procedures including Thailand and every country Anti-Corruption related laws where Company operated. In the event where any Directors, Executives, and Employees do not obey the Anti-Corruption measure, all shall be punished without exception.</li>
        <li>The Board of Directors, the Management Committee or other committee who was appointed shall supervise a whole picture of Company’s Anti-Corruption related matter efficiently and expressively act against corruption by being good example for the Company, business alliance and public to follow.</li>
        <li>Executives shall operate and draft the procedure coherent with this policy for examples: Corruption risk evaluation, In-house controlled process that considered corruption risk of payment, donation, sponsorship, hospitality, gift, or government office contact including communications both internal and external. Moreover, Disclosing the data of Anti-Corruption measures for public to acknowledge and include a safe method of Whistleblowing and Raising Concerns or recommendation in case of corruption.</li>
        <li>Employees shall not overlook or being silenced about Whistleblowing and Raising Concerns about action that may considered as corruption through the methods provided by the Company. The Company shall provide protection for the witness who has given the information.</li>
        <li>The Company shall provide justice and protection to the Employee who act against corruption by not lowering their position, punishing, or giving negative effect to them even if such action will lead to the loss of business opportunity for the Company.</li>
        <li>Every year, the Company shall revise, review and maintain its Anti-Corruption measure and report to the Board of Directors to evaluate its performance, maintain and develop the measure for it to be present.</li>
        </ul><br>
        Any action that violates this policy shall receive the Company’s disciplinary punishment including dismissal in case of necessity. Moreover, anyone who violates this policy may be punished by law if proven to be guilty.
      </div>

      <div class="sub-title">
        Corruption’s Raising Concerns or Whistleblowing
      </div>
      <div class="paragraph">
        Any person who found on any action relating to Corruptions can submit complaints through the following channels:
        <br>
        Letter sent to	<span class="underline font-bold">the Screening Committee</span>
        <div class="ps-20 lg:ps-24">
          Thai Cold Rolled Steel Sheet Public Company Limited<br>
          28/1 Prapawit Building, 5th Floor, Surasak Road,<br>
          Silom, Bangrak, Bangkok 10500, Thailand
        </div>
      </div>
      <div class="grid lg:grid-cols-2 gap-x-4 gap-y-2 py-4 mt-10">
        <div class="title-file">Anti-Corruption Procedures</div>
        <div class="flex gap-4">
          <a href="/policy-files/ระเบียบปฏิบัติด้านการต่อต้านการคอร์รัปชัน%20(TH).pdf" download class="button-style">
            <UIcon name="i-heroicons-document-arrow-down" class="h-5 w-5"/>
            {{$t('common.download')}} (TH)
          </a>
          <a href="/policy-files/Anti-Corruption%20Procedures%20(EN).pdf" download class="button-style">
            <UIcon name="i-heroicons-document-arrow-down" class="h-5 w-5"/>
            {{$t('common.download')}} (EN)
          </a>
        </div>
      </div>
      </div>
    <div v-else>
      <div class="text-sm lg:text-base font-bold">
        การต่อต้านการทุจริตคอร์รัปชัน
      </div>
      <div class="paragraph">
        บริษัท เหล็กแผ่นรีดเย็นไทย จำกัด (มหาชน) (“บริษัทฯ”) มีเจตนารมณ์ในการดำเนินธุรกิจควบคู่ไปกับธรรมาภิบาลภายใต้กรอบการกำกับดูแลกิจการที่ดี รวมทั้งมีความรับผิดชอบต่อสังคม สิ่งแวดล้อม และผู้มีส่วนได้เสียทุกฝ่าย ทำให้การดำเนินธุรกิจของบริษัทฯ เป็นไปด้วยความโปร่งใส เป็นธรรม และสามารถตรวจสอบได้
        <br><br>
        นอกจากนี้ บริษัทฯ ได้ตระหนักถึงความสำคัญของปัญหาการทุจริตคอร์รัปชันของประเทศ ไม่ว่าจะเป็นในรูปแบบของการทุจริตทั้งทางตรงและทางอ้อม อาทิเช่น การให้หรือรับสินบน การจ่ายค่าอำนวยความสะดวก การแสวงหาผลประโยชน์อันมิชอบ เป็นต้น ล้วนเป็นอุปสรรคต่อการพัฒนาเศรษฐกิจและสังคมของประเทศ รวมถึงเป็นอุปสรรคต่อการแข่งขันของธุรกิจ ลดความเชื่อมั่นของผู้ถือหุ้น ชุมชน และผู้มีส่วนได้เสียทุกกลุ่ม
        <br><br>
        เพื่อเป็นส่วนหนึ่งในการแก้ปัญหาการทุจริตคอร์รัปชันของประเทศ บริษัทฯ มีความมุ่งมั่นในการแสดงเจตนารมณ์เข้าเป็นแนวร่วมต่อต้านคอร์รัปชันของภาคเอกชนไทย  (Thailand’s Private Sector Collective Action Coaliation Against Corruption : CAC)  และได้การรับรองการเป็นสมาชิกแนวร่วมดังกล่าว เมื่อเดือนมิถุนายน 2566 ที่ผ่านมา
        <br><br>
        บริษัทฯ จึงขอความร่วมมือจากกรรมการ ผู้บริหาร พนักงาน รวมทั้งผู้มีส่วนได้เสียทุกท่าน ร่วมกันเป็นส่วนหนึ่งในการต่อต้านการทุจริตคอร์รัปชัน ด้วยการปฏิบัติตามกฎหมาย นโยบาย จรรยาบรรณ ระเบียบข้อบังคับ หรือแนวปฏิบัติของบริษัทฯ ที่เกี่ยวข้องกับการต่อต้านการทุจริตอย่างเคร่งครัด รวมทั้งไม่เป็นผู้สนับสนุนหรือส่งเสริมกิจกรรม บุคคล หรือกลุ่มบุคคลใดให้เกิดการกระทำการทุจริตคอร์รัปชัน ตลอดจนไม่เพิกเฉยเมื่อพบเห็นการทุจริตคอร์รัปชัน สมดั่งเจตนารมณ์ของบริษัทฯ ที่ได้ให้ไว้
      </div>

      <div class="sub-title">
        นโยบายต่อต้านการคอร์รัปชัน
      </div>
      <div class="paragraph">
        บริษัท เหล็กแผ่นรีดเย็นไทย จำกัด (มหาชน) (“บริษัทฯ”) ตระหนักถึงความสำคัญของปัญหาการคอร์รัปชันของประเทศ จึงได้แสดงเจตนารมณ์เข้าเป็นแนวร่วมต่อต้านคอร์รัปชันของภาคเอกชนไทย  (Thailand’s Private Sector Collective Action Coaliation Against Corruption : CAC)  เพื่อให้กรรมการ ผู้บริหาร พนักงาน รวมทั้งผู้มีส่วนได้เสียทุกท่านมีส่วนร่วมในการต่อต้านการคอร์รัปชันและปฏิบัติไปในทิศทางเดียวกัน
        <br><br>
        ตามนโยบายฉบับนี้ “การคอร์รัปชัน” หมายถึง การใช้อำนาจหน้าที่โดยมิชอบกระทำการใดๆ ไม่ว่าทางตรงหรือทางอ้อม เพื่อให้ได้มาซึ่งเงิน ทรัพย์สิน หรือผลประโยชน์อื่นใด ทั้งต่อองค์กร ตนเอง หรือผู้อื่น รวมถึงการให้ของขวัญหรือบริการ การให้หรือรับสินบน การเรียกร้องผลประโยชน์ การข่มขู่ การให้ผลประโยชน์ หรือการเกิดความขัดแย้งทางผลประโยชน์ กับเจ้าหน้าที่ของรัฐหรือระหว่างหน่วยงานเอกชน ทั้งในรูปแบบของเงินสดหรือสิ่งของแทนเงินสด เว้นแต่เป็นกรณีที่กฎหมาย ระเบียบ ประกาศ ข้อบังคับ ขนบธรรมเนียมประเพณีท้องถิ่น หรือจารีตทางการค้าให้กระทำได้
        <br><br>
        บริษัทฯ จึงได้กำหนดนโยบายต่อต้านการคอร์รัปชัน เพื่อใช้เป็นกรอบแนวทางปฏิบัติและหน้าที่ความรับผิดชอบของผู้ที่เกี่ยวข้อง ดังนี้
        <ul class="paragraph list-outside list-decimal ps-4">
          <li>บริษัทฯ มีนโยบายต่อต้านการกระทำที่เกี่ยวข้องกับการคอร์รัปชันในทุกรูปแบบ โดยสนับสนุนและส่งเสริมให้กรรมการ ผู้บริหาร และพนักงานทุกระดับเห็นความสำคัญ มีจิตสำนึก และสร้างวัฒนธรรมในการต่อต้านการคอร์รัปชัน</li>
          <li>กรรมการ ผู้บริหาร และพนักงานทุกคนจะร่วมมือกันต่อต้านการคอร์รัปชัน โดยไม่เรียกร้อง ไม่ดำเนินการ ไม่ยอมรับ และไม่ข้องเกี่ยวกับการคอร์รัปชันในทุกรูปแบบ รวมทั้งไม่เป็นผู้สนับสนุนหรือส่งเสริมกิจกรรม บุคคล หรือกลุ่มบุคคลใดให้เกิดการกระทำการคอร์รัปชัน เพื่อประโยชน์ต่อตนเอง ครอบครัว เพื่อน ญาติ คนรู้จัก หรือบุคคลใดๆ</li>
          <li>กรรมการ ผู้บริหาร และพนักงานทุกคนต้องปฏิบัติงานที่รับผิดชอบให้สอดคล้องกับนโยบาย ระเบียบ และแนวปฏิบัติ รวมทั้งกฎหมายที่เกี่ยวข้องกับการต่อต้านการคอร์รัปชันของประเทศไทยและในทุกประเทศที่บริษัทฯ ดำเนินกิจการ หากกรรมการ ผู้บริหาร และพนักงานคนใดไม่ปฏิบัติตามมาตรการต่อต้านการคอร์รัปชันต้องได้รับการลงโทษทุกคนโดยไม่มีข้อยกเว้น</li>
          <li>คณะกรรมการบริษัทฯ คณะกรรมการจัดการ หรือคณะกรรมการอื่นที่ได้รับมอบหมาย ต้องกำกับดูแลการต่อต้านการคอร์รัปชันของบริษัทฯ ในภาพรวมให้มีประสิทธิภาพ รวมทั้งเป็นผู้นำที่แสดง ความมุ่งมั่นที่จะต่อต้านการคอร์รัปชันให้เป็นแบบอย่างแก่องค์กร พันธมิตรทางธุรกิจ และสาธารณชนนำไปปฏิบัติ</li>
          <li>ผู้บริหารต้องดำเนินการและจัดทำแนวปฏิบัติให้สอดคล้องกับนโยบายฉบับนี้ เช่น การประเมินความเสี่ยงด้านการคอร์รัปชัน การออกแบบระบบการควบคุมภายในที่คำนึงถึงความเสี่ยงด้านการคอร์รัปชันในกระบวนการเบิกจ่าย การบริจาค การสนับสนุน การเลี้ยงรับรอง การให้ของขวัญ หรือการติดต่อหน่วยงานราชการต่างๆ ตลอดจนการสื่อสารทั้งภายในและภายนอกองค์กร การเปิดเผยข้อมูลที่เกี่ยวข้องกับมาตรการต่อต้านการคอร์รัปชันให้แก่สาธารณชนรับทราบ และการกำหนดช่องทางที่ปลอดภัยในการแจ้งเบาะแสหรือการขอคำแนะนำในกรณีที่เกิดการคอร์รัปชัน เป็นต้น</li>
          <li>พนักงานของบริษัทฯ ต้องไม่ละเลยหรือเพิกเฉยที่จะแจ้งการกระทำอันเข้าข่ายการคอร์รัปชันผ่านช่องทางที่บริษัทฯ กำหนด โดยบริษัทฯจะให้ความคุ้มครองแก่ผู้ที่แจ้งการกระทำดังกล่าว</li>
          <li>บริษัทฯ จะให้ความเป็นธรรมและให้ความคุ้มครองแก่พนักงานของบริษัทฯ ที่ปฏิเสธการคอร์รัปชัน โดยจะไม่ลดตำแหน่ง ลงโทษ หรือให้ผลทางลบต่อพนักงานที่ปฏิเสธการคอร์รัปชันแม้ว่าการกระทำนั้นจะทำให้บริษัทฯ สูญเสียโอกาสทางธุรกิจ</li>
          <li>ในทุกๆปีบริษัทฯ จะทำการทบทวน ตรวจสอบและปรับปรุงมาตรการต่อต้านคอร์รัปชันและรายงานต่อคณะกรรมการ เพื่อวัดผลประสิทธิภาพ ปรับปรุงและพัฒนามาตรการต่อต้าน คอร์รัปชันของบริษัทฯ ให้มีความเท่าทันกับความเสี่ยงใหม่ๆที่อาจมีการเปลี่ยนแปลงหรือเพิ่มขึ้นในอนาคตได้</li>
        </ul><br>
        การกระทำใดๆ ที่เป็นการฝ่าฝืนนโยบายฉบับนี้ จะต้องได้รับโทษทางวินัยตามระเบียบที่บริษัทฯ กำหนดไว้ ซึ่งรวมถึงการเลิกจ้างในกรณีบริษัทฯ เห็นว่าจำเป็น นอกจากนี้ ผู้ที่ฝ่าฝืนนโยบายฉบับนี้ อาจได้รับโทษทางกฎหมาย หากพิสูจน์ได้ว่าการกระทำดังกล่าวนั้นผิดกฎหมาย
      </div>

      <div class="sub-title">
        การแจ้งเบาะแสหรือข้อร้องเรียนด้านการคอร์รัปชัน
      </div>
      <div class="paragraph">
        ผู้ที่ที่พบเห็นการกระทำผิดใดๆ เกี่ยวกับการคอร์รัปชันสามารถแจ้งเบาะแสหรือข้อร้องเรียนมายังบริษัทฯ ผ่านช่องทาง ดังนี้
        <br>
        จดหมาย ส่งถึง	<span class="underline font-bold">คณะกรรมการกลั่นกรอง</span>
        <div class="ps-20 lg:ps-24">
          บริษัท เหล็กแผ่นรีดเย็นไทย จำกัด (มหาชน)<br>
          28/1 อาคารประภาวิทย์ ชั้น 5 ถนนสุรศักดิ์<br>
          สีลม บางรัก กรุงเทพฯ 10500
        </div>
      </div>
      <div class="grid lg:grid-cols-2 gap-x-4 gap-y-2 py-4 mt-10">
        <div class="title-file">ระเบียบปฏิบัติด้านการต่อต้านการคอร์รัปชัน</div>
        <div class="flex gap-4">
          <a href="/policy-files/ระเบียบปฏิบัติด้านการต่อต้านการคอร์รัปชัน%20(TH).pdf" download class="button-style">
            <UIcon name="i-heroicons-document-arrow-down" class="h-5 w-5"/>
            {{$t('common.download')}} (TH)
          </a>
          <a href="/policy-files/Anti-Corruption%20Procedures%20(EN).pdf" download class="button-style">
            <UIcon name="i-heroicons-document-arrow-down" class="h-5 w-5"/>
            {{$t('common.download')}} (EN)
          </a>
        </div>
      </div>
    </div>
  </UContainer>
</template>

<style scoped>
.title {
  @apply text-xl lg:text-2xl font-bold text-downriver-950
}

.sub-title {
  @apply text-sm lg:text-base font-bold mt-6
}

.paragraph {
  @apply text-sm lg:text-base font-normal
}

.title-file {
  @apply text-sm lg:text-base font-bold text-gray-500
}

.button-style {
  @apply focus:outline-none focus-visible:outline-0 flex-shrink-0 font-medium rounded-md text-sm
  inline-flex items-center gap-x-2 px-3 py-2
  ring-1 ring-inset ring-current text-blue-500 hover:bg-blue-50 focus-visible:ring-2 focus-visible:ring-blue-500
}
</style>
