<script setup lang="ts">

const {locale} = useI18n()
</script>

<template>
  <UContainer class="my-6 lg:my-24 text-darkest">
    <h1 class="title mb-4 lg:mb-14">{{ $t('policy.pdpa') }}</h1>

    <div v-if="locale==='en'">
      <div class="paragraph">
        The Thai Cold Rolled Steel Sheet Public Company Limited has realized the importance of personal data protection which is the individual rights according to Personal Data Protection Act 2019 (BE 2562). The company, as a Data Controller, will not collect, disclose or use any Personal Data without consent from the data subject.
        <br>
        Therefore, the Company has developed this Personal Data Protection Policy to secure Personal Data and comply with the law that can be described as in the following details:
      </div>
      <div class="sub-title">
        1. Definition
      </div>
      <div class="paragraph">
        “Personal Data” means the individual data which can directly or Indirectly specify personal identity such as name, surname, age, educational background, address, telephone number, e-mail, financial information, date of birth, ID card, passport, work information (position, salary, ect.), photo, fingerprint, iris scan, vocal identity information, Information on performance appraisal or employer evaluation, visual or audio record that are used for tracking the individual activities s, location data, and IP Address or Cookie ID, etc., excluding data of deceased.<br>
        “Sensitive Data” means Personal Data which is a commonly privacy data. If Sensitive l Data is disclosed to public, it may cause the conflict or effects to data subject’s feeling or serious injury to the data subject such as race, tribe, political opinion, religion, belief, sexual behavior, criminal record, marital status, health information, mental health information, information that affects to people's feelings, etc.<br>
        “the Company” means Thai Cold Rolled Steel Sheet Public Company Limited.<br>
        “Data Controller” means the Company who has the power for decision to collect, use, or disclose the Personal Data.
      </div>
      <div class="sub-title">
        2. Scope of Using
      </div>
      <div class="paragraph">
        2.1. This announcement is enforced with board of directors, executive and all employees including partners, contracting parties, and stakeholders.<br>
        2.2. This announcement is enforced with all activities of the Company that deals with Personal Data for example data collection by Human Resource Department, using Personal Data for the company’s objective.
      </div>
      <div class="sub-title">
        3. The Source of Personal Data
      </div>
      <div class="paragraph">
        The Company may receive Personal Data from 2 ways as follows:<br>
        3.1. The company is directly received Personal Data from the data subject as following details;<br>
        (1) Procession of job application or process of submitting petition to the company.<br>
        (2) Voluntarily survey or email response or the other communication channel between the Company and the data subject.<br>
        (3) Website usage data via browser’s cookies of the data subject.<br>
        (4) Execution of a contract that made legal relation between the Company and the data subject.<br>
        3.2. The company is received Personal Data from third party as following detail:<br>
        (1) Third parties who disclose Personal Data with consent from the data subject.
      </div>
      <div class="sub-title">
        4. Objectives
      </div>
      <div class="paragraph">
        4.1. The Company will collect Personal Data of board of directors, executives and all employees for business operation and statistical processing under the Company’s objective for example; collecting employee’s Personal Data for employee identification, collecting partner’s Personal Data for contacting, fingerprint scan for time attendance, collecting Personal Data of the Company’s website user, or collecting the Personal Data from using the Company's computer system, etc.<br>
        4.2. If the objective of the Personal Data collecting is changed, the company shall notify and ask for the consent from the data subject including provide an amendment record as evidence.<br>
        4.3. The company will not do anything other than this Objectives except for the following reason:<br>
        (1) The new objective to notify to the data subject and receiving the consent from the data subject.<br>
        (2) Legal compliance.
      </div>
      <div class="sub-title">
        5. Personal Data Collection
      </div>
      <div class="paragraph">
        5.1. Collecting, using, disclosure, and anonymization of Personal Data will be processed according to objective, scope, and legitimate methods. Collecting, Using or disclosing of Personal Data shall be limited as necessary for business operation. The company shall manage the data subject to acknowledge, give consent in writing or by any methods according to the Company's specification. However, the Company does not need to ask for consent from the data subject as following cases;<br>
        (1) For compliance with legal obligation such as the Personal Data Protection Act, Electronic Transactions Act, Telecommunications Business Act, Money Laundering Control Act, Civil and Criminal Code, Civil Procedure and Criminal Procedure Code, etc.<br>
        (2) For the performance of a task carried out in public interest of the investigating officers or the trial and adjudication of the court.<br>
        (3) For the legitimate interests pursued by the Company or person or another juristic person.<br>
        (4) For protection the vital interests of data subject or another natural person.<br>
        (5) For the performance of a contract that data subject is a contracting party or processing of requests by the data subject before entering into that contract.<br>
        5.2. The company cannot collect the Sensitive Data without writing consent from the data subject except it's a legal obligation, the Company doesn’t need to received writing consent from the data subject.
      </div>
      <div class="sub-title">
        6. Security
      </div>
      <div class="paragraph">
        6.1. The Personal Data that the data subject provide to the Company shall be accurate and up to date. The Personal Data shall be used for the Company’s objectives only and the Company shall take appropriate measures to protect the rights of data subject, including the protection of Personal Data in the computer system of the Company.<br>
        6.2. The company will provide Data Protection Impact Assessment in order to use duty of care for processing the high risk in Personal Data which shall affect to the rights and the liberties of the individual person.<br>
        6.3. The company shall be audited and verified to comply with this Data Protection Policy by Internal Audit Department of the Company
      </div>
      <div class="sub-title">
        7. Responsibility
      </div>
      <div class="paragraph">
        Any employees or Departments dealing with the Personal Data shall significantly realize when the collecting, using and disclosing of the Personal Data in accordance with the laws, policy and procedure on Personal Data Protection. The Company as a Data Controller shall appoint the Data Protection Officer who is responsible to give suggestion and coordinate with relevant parties in case of problems regarding collecting, using, and disclosing the Personal Data under the Personal Data Protection Act 2019 (BE 2562) and related regulation.
      </div>
      <div class="sub-title">
        8. The Rights of the Data Subject
      </div>
      <div class="paragraph">
        The data subject has the right to requests to access their Personal Data, delete or destroy Personal Data, suspend to use Personal Data, change Personal Data to be correct and complete, transfer Personal Data, and protest to the Personal Data processing in accordance with Personal Data Protection Act 2019 (BE. 2562).
      </div>
      <div class="sub-title">
        9. Duration of Retention the Personal Data
      </div>
      <div class="paragraph">
        The company shall retain the Personal Data of the data subject for an appropriate and necessary period for each type of Personal Data as required by law or criteria set by the company. When the retention period has expired, the company will delete, destroy or anonymize the Personal Data.
      </div>
      <div class="sub-title">
        A request form on the Rights of the Data Subject
      </div>
      <div class="paragraph">
        The Data Subject shall submit a request form to exercise the rights of the Data Subject to the company's DPO.
      </div>

      <div class="sub-title">
        PDPA Contact Chanel<br>
        Data Protection Office of Thai Cold Rolled Steel Sheet Public Company Limited
      </div>
      <div class="paragraph">
        No. 28/1 Prapawit Bldg. 5th Floor, Surasak Rd., Silom, Bangrak, Bangkok 10500<br>
        Tel: (66) 0-2630-0300<br>
        Email: legal@tcrss.com
      </div>
      <div class="mt-2.5 lg:mt-10">
        <div class="grid lg:grid-cols-2 gap-x-4 gap-y-2 py-4">
          <div class="title-file">A request form on the Rights of the Data Subject</div>
          <div class="flex gap-4">
            <a href="/policy-files/แบบคำร้องขอใช้สิทธิของเจ้าของข้อมูลส่วนบุคคล (TH).pdf" download class="button-style">
              <UIcon name="i-heroicons-document-arrow-down" class="h-5 w-5"/>
              {{$t('common.download')}} (TH)
            </a>
            <a href="/policy-files/A request form on the Rights of the Data Subject (EN).pdf" download class="button-style">
              <UIcon name="i-heroicons-document-arrow-down" class="h-5 w-5"/>
              {{$t('common.download')}} (EN)
            </a>
          </div>
        </div>
        <UDivider/>
        <div class="grid lg:grid-cols-2 gap-x-4 gap-y-2 py-4">
          <div class="title-file">Privacy Notice - Employee & Candidate</div>
          <div class="flex gap-4">
            <a href="/policy-files/ประกาศความเป็นส่วนตัว – พนักงาน & ผู้สมัครงาน (TH).pdf" download class="button-style">
              <UIcon name="i-heroicons-document-arrow-down" class="h-5 w-5"/>
              {{$t('common.download')}} (TH)
            </a>
            <a href="/policy-files/Privacy Notice - Employee & Candidate (EN).pdf" download class="button-style">
              <UIcon name="i-heroicons-document-arrow-down" class="h-5 w-5"/>
              {{$t('common.download')}} (EN)
            </a>
          </div>
        </div>
        <UDivider/>
        <div class="grid lg:grid-cols-2 gap-x-4 gap-y-2 py-4">
          <div class="title-file">Privacy Notice - Business Alliance</div>
          <div class="flex gap-4">
            <a href="/policy-files/ประกาศความเป็นส่วนตัว - คู่ค้า (TH).pdf" download class="button-style">
              <UIcon name="i-heroicons-document-arrow-down" class="h-5 w-5"/>
              {{$t('common.download')}} (TH)
            </a>
            <a href="/policy-files/Privacy Notice - Business Alliance (EN).pdf" download class="button-style">
              <UIcon name="i-heroicons-document-arrow-down" class="h-5 w-5"/>
              {{$t('common.download')}} (EN)
            </a>
          </div>
        </div>
        <UDivider/>
        <div class="grid lg:grid-cols-2 gap-x-4 gap-y-2 py-4">
          <div class="title-file">Privacy Notice - Stakeholder</div>
          <div class="flex gap-4">
            <a href="/policy-files/ประกาศความเป็นส่วนตัว - ผู้มีส่วนได้เสีย (TH).pdf" download class="button-style">
              <UIcon name="i-heroicons-document-arrow-down" class="h-5 w-5"/>
              {{$t('common.download')}} (TH)
            </a>
            <a href="/policy-files/Privacy Notice - Stakeholder (EN).pdf" download class="button-style">
              <UIcon name="i-heroicons-document-arrow-down" class="h-5 w-5"/>
              {{$t('common.download')}} (EN)
            </a>
          </div>
        </div>
      </div>
    </div>

    <div v-else>
      <div class="paragraph">
        บริษัท เหล็กแผ่นรีดเย็นไทย จำกัด (มหาชน) ตระหนักดีถึงความสำคัญของคุ้มครองข้อมูล ส่วนบุคคล อันเป็นสิทธิตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ.2562 ที่จะได้รับการคุ้มครองข้อมูลส่วนบุคคล ซึ่งบริษัทฯ ในฐานะผู้ควบคุมข้อมูลส่วนบุคคลจะ เก็บรวบรวม เปิดเผย หรือนำไปใช้ ซึ่งข้อมูลส่วนบุคคลของบุคคลใด โดยไม่ได้รับความยินยอมจากเจ้าของข้อมูลส่วนบุคคลไม่ได้
        <br>
        ด้วยเหตุนี้ บริษัทฯ จึงได้กำหนดนโยบายคุ้มครองส่วนบุคคลเพื่อรักษาความปลอดภัยของข้อมูลส่วนบุคคล รวมถึงเพื่อปฏิบัติตาม
      </div>
      <div class="sub-title">
        1. บทนิยาม
      </div>
      <div class="paragraph">
        “ข้อมูลส่วนบุคคล” หมายถึง ข้อมูลของบุคคลซึ่งสามารถระบุตัวตนของบุคคลนั้นได้ ไม่ว่าทางตรงหรือทางอ้อม เช่น ชื่อสกุล เพศ อายุ ประวัติการศึกษา ที่อยู่ หมายเลขโทรศัพท์ อีเมล ข้อมูลทางการเงิน วันเดือนปีเกิด บัตรประชาชน หนังสือเดินทาง ข้อมูลการทำงาน ตำแหน่ง เงินเดือน ภาพถ่าย ลายนิ้วมือ ข้อมูลสแกนม่านตา ข้อมูลอัตลักษณ์เสียง ข้อมูลการประเมินการทำงานหรือความเห็นของนายจ้าง ข้อมูลบันทึกภาพหรือเสียงต่างๆ ที่ใช้ติดตามตรวจสอบกิจกรรมต่างของบุคคล ข้อมูลตำแหน่งที่อยู่ของบุคคล (Location Data) หรือ ข้อมูลการใช้ระบบเทคโนโลยีสารสนเทศของบุคคล (IP Address or Cookie ID) เป็นต้น แต่ไม่รวมถึงข้อมูลผู้ถึงแก่กรรมโดยเฉพาะ<br>
        “ข้อมูลอ่อนไหว” หมายถึง ข้อมูลส่วนบุคคลที่เป็นเรื่องส่วนตัวโดยแท้ หากถูกเปิดเผยให้สาธารณชนทราบ อาจก่อให้เกิดความขัดแย้ง กระทบต่อความรู้สึก หรือเกิดความเสียหายรุนแรงต่อเจ้าของข้อมูล เช่น เชื้อชาติ เผาพันธุ์ ความคิดเห็นทางการเมือง ศาสนา ความเชื่อ พฤติกรรมทางเพศ ประวัติอาชญากรรม สถานภาพการสมรส ข้อมูลสุขภาพ ข้อมูลสุขภาพจิต ข้อมูลที่กระทบความรู้สึกของประชาชน เป็นต้น<br>
        “บริษัท” หมายถึง บริษัท เหล็กแผ่นรีดเย็นไทย จำกัด (มหาชน)<br>
        “ผู้ควบคุมข้อมูลส่วนบุคคล” หมายถึง บริษัทซึ่งมีอำนาจหน้าที่ตัดสินใจเกี่ยวกับการเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคล
      </div>
      <div class="sub-title">
        2. ขอบเขตการใช้
      </div>
      <div class="paragraph">
        2.1. ให้ประกาศฉบับนี้ มีผลบังคับใช้กับคณะกรรมการ ผู้บริหาร และพนักงานทุกระดับของบริษัท รวมถึง  คู่ค้า คู่สัญญา และผู้มีส่วนได้เสียกับบริษัท<br>
        2.2. ให้ประกาศฉบับนี้ มีผลใช้บังคับกับทุกกิจกรรมการดำเนินงานของบริษัทที่เกี่ยวข้องกับข้อมูลส่วนบุคคล เช่น การเก็บข้อมูลของฝ่ายบุคคล การนำข้อมูลส่วนบุคคลไปใช้เพื่อกิจการของบริษัท เป็นต้น
      </div>
      <div class="sub-title">
        3. แหล่งที่มาของข้อมูลส่วนบุคคล
      </div>
      <div class="paragraph">
        บริษัทอาจได้รับข้อมูลส่วนบุคคลจาก 2 ช่องทาง ได้แก่<br>
        3.1. ได้รับมูลส่วนบุคคลจากเจ้าของข้อมูลโดยตรง โดยบริษัทจะเก็บรวมรวมข้อมูลส่วนบุคคลในขั้นตอนต่อไปนี้<br>
        (1) ขั้นตอนการสมัครงาน หรือขั้นตอนการยื่นคำร้องขอใช้สิทธิต่าง ๆ กับบริษัท<br>
        (2) จากความสมัครใจในการทำแบบสอบถาม (survey) หรือ การโต้ตอบทางอีเมล หรือ ช่องทางการสื่อสารอื่น ๆ ระหว่างบริษัทและเจ้าของข้อมูลส่วนบุคคล<br>
        (3) เก็บจากข้อมูลการใช้ website ผ่าน browser’s cookies ของเจ้าของข้อมูลส่วนบุคคล<br>
        (4) การทำสัญญาอันก่อให้เกิดนิติสัมพันธ์ระหว่างบริษัทและเจ้าของข้อมูลส่วนบุคคล<br>
        3.2. ด้รับข้อมูลส่วนบุคคลมาจากบุคคลที่สาม ดังต่อไปนี้<br>
        (1) บุคคลที่สามที่เปิดเผยข้อมูลส่วนบุคคลโดยได้ได้ความยินยอมจากเจ้าของข้อมูลบุคคล
      </div>
      <div class="sub-title">
        4. วัตถุประสงค์ในการเก็บข้อมูลส่วนตัว
      </div>
      <div class="paragraph">
        4.1. บริษัทจะจัดเก็บข้อมูลส่วนบุคคลของคณะกรรมการ ผู้บริหาร และพนักงานทุกระดับ เพื่อการดำเนินกิจการของบริษัท การจัดทำสถิติ  ซึ่งจะเป็นไปตามวัตถุประสงในการดำเนินกิจการของบริษัท เช่น การจัดเก็บข้อมูลส่วนบุคคลพนักงานเพื่อยืนยันตัวตนของพนังงาน การเก็บข้อมูลส่วนบุคคลคู่ค้าเพื่อใช้ในการติดต่อ การสแกนลายนิ้วมือเพื่อบันทึกเวลาเข้าและออกจากงาน การเก็บข้อมูลส่วนบุคคลจากการใช้เว็บไซต์ของบริษัท หรือการเก็บข้อมูลส่วนบุคคลจากการใช้งานระบบคอมพิวเตอร์ของบริษัท เป็นต้น<br>
        4.2. หากภายหลังมีการเปลี่ยนแปลงวัตถุประสงค์ในการเก็บรวบรวมข้อมูลส่วนบุคคล บริษัทจะแจ้งให้เจ้าของข้อมูลส่วนบุคคลทราบและขอความยินยอม และจัดให้มีบันทึกการแก้ไขเพิ่มเติมไว้เป็นหลักฐาน<br>
        4.3. บริษัทจะไม่ทำการใด ๆ นอกเหนือที่ระบุในวัตถุประสงค์ เว้นแต่<br>
        (1) ได้แจ้งวัตถุประสงใหม่และได้รับความยินยอมจากเจ้าของข้อมูลส่วนบุคคล<br>
        (2) เป็นการกระทำตามกฎหมาย.
      </div>
      <div class="sub-title">
        5. การเก็บข้อมูลส่วนบุคคล
      </div>
      <div class="paragraph">
        5.1. การจัดเก็บรวบรวม การใช้ หรือการเปิดเผยข้อมูลส่วนบุคคล และจัดทำข้อมูลนิรนามจะกระทำโดยมี วัตถุประสงค์ ขอบเขต และใช้วิธีการที่ชอบด้วยกฎหมาย ตลอดจนเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลอย่างจำกัดเพียงเท่าที่จำเป็นแก่การดำเนินกิจการของบริษัท ทั้งนี้บริษัทจะดำเนินการให้เจ้าของข้อมูล รับรู้ ให้ความยินยอม โดยมีหนังสือขอความยินยอม หรือโดยวิธีการอื่นใดตามแบบวิธีของบริษัท เว้นแต่กรณีดังต่อไปนี้ บริษัทไม่จำเป็นต้องขอความยินยอมจากเจ้าของข้อมูล<br>
        (1) เป็นการปฏิบัติตามกฎหมาย เช่น พระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พระราชบัญญัติว่าด้วยธุรกรรมทางอิเล็กทรอนิกส์ พระราชบัญญัติการประกอบกิจการโทรคมนาคม พระราชบัญญัติป้องกันและปราบปรามการฟอกเงิน ประมวลกฎหมายแพ่งและอาญา ประมวลกฎหมายวิธีพิจารณาความแพ่งและอาญา เป็นต้น<br>
        (2) เป็นไปเพื่อประโยชน์แก่การสอบสวนของพนักงานสอบสวน หรือการพิจารณาพิพากษาคดีของศาล<br>
        (3) เป็นการจำเป็นเพื่อประโยชน์โดยชอบด้วยกฎหมายของบริษัท หรือของบุคคลหรือนิติบุคคลอื่นที่ไม่ใช่บริษัท<br>
        (4) เป็นการจำเป็นเพื่อป้องกันหรือระงับอันตรายต่อชีวิต ร่างกาย หรือสุขภาพของบุคคล<br>
        (5) เป็นการจำเป็นเพื่อการปฏิบัติตามสัญญาซึ่งเจ้าของข้อมูลส่วนบุคคลเป็นคู่สัญญาหรือเพื่อใช้ในการดำเนินการตามคำขอของเจ้าของข้อมูลก่อนเข้าทำสัญญานั้น<br>
        5.2. บริษัทจะจัดเก็บข้อมูลอ่อนไหวได้ต่อเมื่อได้รับความยินยอมโดยชัดแจ้งเป็นลายลักษณ์อักษรจากเจ้าของข้อมูลส่วนบุคคล เว้นแต่เป็นกรณีตามที่กฎหมายกำหนดไม่จำต้องได้ความยินยอมโดยชัดแจ้งจากเจ้าของข้อมูลส่วนบุคคล
      </div>
      <div class="sub-title">
        6. มาตรการรักษาความปลอดภัย
      </div>
      <div class="paragraph">
        6.1. ข้อมูลส่วนบุคคลที่เจ้าของข้อมูลให้บริษัทจะต้องเป็นข้อมูลส่วนบุคคลที่มีความถูกต้องและเป็นปัจจุบัน จะถูกนำไปใช้ให้เป็นไปตามวัตถุประสงค์การดำเนินงานของบริษัทเท่านั้น และบริษัทจะดำเนินมาตรการที่เหมาะสมเพื่อคุ้มครองสิทธิของเจ้าของข้อมูลส่วนบุคคล ทั้งนี้ให้หมายความรวมถึงการคุ้มครองข้อมูลส่วนบุคคที่อยู่ในระบบคอมพิวเตอร์อันอยู่ในขอบข่ายการจัดการของบริษัท<br>
        6.2. บริษัทจะจัดให้มีการประเมินผลกระทบด้านการคุ้มครองข้อมูลส่วนบุคคล (Data Protection Impact Assessment: DPIA) เพื่อที่จะใช้ความระมัดระวังในการประมวลผลข้อมูลส่วนบุคคลกรณีที่มีความเสี่ยงสูงที่จะมีผลกระทบต่อสิทธิเสรีภาพของบุคคล<br>
        6.3. บริษัทจะจัดให้มีการสอบทานและประเมินประสิทธิภาพการรักษาข้อมูลส่วนบุคคลโดยฝ่ายตรวจสอบภายในของบริษัท
      </div>
      <div class="sub-title">
        7. ความรับผิดชอบของบุคคล
      </div>
      <div class="paragraph">
        ให้พนักงานหรือหน่วยงานที่เกี่ยวข้องกับข้อมูลส่วนบุคคลต้องให้ความสำคัญและรับผิดชอบในการเก็บรวบรวมใช้ หรือเปิดเผยข้อมูลส่วนบุคคลตามกฎหมาย นโยบาย และแนวปฏิบัติในการคุ้มครองข้อมูลส่วนบุคคลอย่างเคร่งครัด โดยบริษัทในฐานะผู้ควบคุมข้อมูลส่วนบุคคลจะจัดให้มีเจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคล ซึ่งมีอำนาจในการให้คำแนะนำในการเก็บรวบรวม ใช้ และเปิดเผยข้อมูลส่วนบุคคลให้สอดคล้องกับพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 รวมถึงกฎหมายที่เกี่ยวข้องกับการคุ้มครองข้อมูลส่วนบุคคล ตลอดจนประสานงานกับผู้ที่เกี่ยวข้องในกรณีมีปัญหาในการเก็บรวบรวม ใช้ และเปิดเผยข้อมูลส่วนบุคคล
      </div>
      <div class="sub-title">
        8. สิทธิของเจ้าของข้อมูล
      </div>
      <div class="paragraph">
        เจ้าของข้อมูลมีสิทธิขอเข้าถึงข้อมูลส่วนบุคคลของตน ขอให้ลบหรือให้ทำลายข้อมูล ระงับการใช้ชั่วคราว แก้ไขเปลี่ยนแปลงข้อมูลให้ถูกต้อง สมบูรณ์ โอนย้ายข้อมูล และคัดค้านการประมวลผล ทั้งนี้  ให้เป็นไปตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562
      </div>
      <div class="sub-title">
        9. ระยะเวลาในการเก็บรักษาข้อมูลส่วนบุคคล
      </div>
      <div class="paragraph">
        บริษัทจะเก็บรักษาข้อมูลส่วนบุคคลของเจ้าของข้อมูลตามระยะเวลาที่เหมาะสมและจำเป็น สำหรับข้อมูลส่วนบุคคลแต่ละประเภทตามที่กฎหมายหรือหลักเกณฑ์ที่บริษัทกำหนด และเมื่อพ้นกำหนดระยะเวลาการเก็บรักษาดังกล่าว บริษัทจะลบ ทำลาย หรือทำให้ข้อมูลส่วนบุคคลเป็นข้อมูลที่ไม่สามารถระบุตัวบุคคลที่เป็นเจ้าของข้อมูลได้
      </div>
      <div class="sub-title">
        การขอใช้สิทธิของเจ้าของข้อมูลส่วนบุคคล
      </div>
      <div class="paragraph">
        ให้เจ้าของข้อมูลส่วนบุคคลยื่นแบบคำร้องขอใช้สิทธิของเจ้าของข้อมูลส่วนบุคคลมาที่เจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคลของบริษัท
      </div>

      <div class="sub-title">
        ช่องทางการติดต่อด้านการคุ้มครองข้อมูลส่วนบุคคล<br>
        เจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคล บริษัท เหล็กแผ่นรีดเย็นไทย จำกัด (มหาชน)
      </div>
      <div class="paragraph">
        เลขที่ 28/1 อาคารประภาวิทย์ ชั้น 5 ถนนสุรศักดิ์ แขวงสีลม เขตบางรัก กรุงเทพฯ 10500<br>
        โทรศัพท์ : (66) 0-2630-0300<br>
        อีเมล : legal@tcrss.com
      </div>
      <div class="mt-2.5 lg:mt-10">
        <div class="grid lg:grid-cols-2 gap-x-4 gap-y-2 py-4">
          <div class="title-file">แบบคำร้องขอใช้สิทธิของเจ้าของข้อมูลส่วนบุคคล</div>
          <div class="flex gap-4">
            <a href="/policy-files/แบบคำร้องขอใช้สิทธิของเจ้าของข้อมูลส่วนบุคคล (TH).pdf" download class="button-style">
              <UIcon name="i-heroicons-document-arrow-down" class="h-5 w-5"/>
              {{$t('common.download')}} (TH)
            </a>
            <a href="/policy-files/A request form on the Rights of the Data Subject (EN).pdf" download class="button-style">
              <UIcon name="i-heroicons-document-arrow-down" class="h-5 w-5"/>
              {{$t('common.download')}} (EN)
            </a>
          </div>
        </div>
        <UDivider/>
        <div class="grid lg:grid-cols-2 gap-x-4 gap-y-2 py-4">
          <div class="title-file">ประกาศความเป็นส่วนตัว – พนักงาน & ผู้สมัครงาน</div>
          <div class="flex gap-4">
            <a href="/policy-files/ประกาศความเป็นส่วนตัว – พนักงาน & ผู้สมัครงาน (TH).pdf" download class="button-style">
              <UIcon name="i-heroicons-document-arrow-down" class="h-5 w-5"/>
              {{$t('common.download')}} (TH)
            </a>
            <a href="/policy-files/Privacy Notice - Employee & Candidate (EN).pdf" download class="button-style">
              <UIcon name="i-heroicons-document-arrow-down" class="h-5 w-5"/>
              {{$t('common.download')}} (EN)
            </a>
          </div>
        </div>
        <UDivider/>
        <div class="grid lg:grid-cols-2 gap-x-4 gap-y-2 py-4">
          <div class="title-file">ประกาศความเป็นส่วนตัว - คู่ค้า</div>
          <div class="flex gap-4">
            <a href="/policy-files/ประกาศความเป็นส่วนตัว - คู่ค้า (TH).pdf" download class="button-style">
              <UIcon name="i-heroicons-document-arrow-down" class="h-5 w-5"/>
              {{$t('common.download')}} (TH)
            </a>
            <a href="/policy-files/Privacy Notice - Business Alliance (EN).pdf" download class="button-style">
              <UIcon name="i-heroicons-document-arrow-down" class="h-5 w-5"/>
              {{$t('common.download')}} (EN)
            </a>
          </div>
        </div>
        <UDivider/>
        <div class="grid lg:grid-cols-2 gap-x-4 gap-y-2 py-4">
          <div class="title-file">ประกาศความเป็นส่วนตัว - ผู้มีส่วนได้เสีย</div>
          <div class="flex gap-4">
            <a href="/policy-files/ประกาศความเป็นส่วนตัว - ผู้มีส่วนได้เสีย (TH).pdf" download class="button-style">
              <UIcon name="i-heroicons-document-arrow-down" class="h-5 w-5"/>
              {{$t('common.download')}} (TH)
            </a>
            <a href="/policy-files/Privacy Notice - Stakeholder (EN).pdf" download class="button-style">
              <UIcon name="i-heroicons-document-arrow-down" class="h-5 w-5"/>
              {{$t('common.download')}} (EN)
            </a>
          </div>
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
