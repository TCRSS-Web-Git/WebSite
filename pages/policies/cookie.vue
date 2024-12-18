<script setup lang="ts">
const {locale} = useI18n()
</script>

<template>
<UContainer class="my-6 lg:my-24 text-darkest">
  <h1 class="title mb-4 lg:mb-14">{{ $t('policy.cookie') }}</h1>
  <div v-if="locale==='en'">
    <div class="paragraph">
      When you visit our website (http://www.tcrss.com/), the information is collected and stored through cookies. This Cookie Policy explains what cookies are, how and why we use them, and how you delete or decline the use of Cookie as detailed below:
    </div>
    <div class="sub-title">
      What are cookies?
    </div>
    <div class="paragraph">
      Cookies are small files that store browsing history such as date, time, clicked links, visited pages and other settings which are saved to your computer device and/or communication devices such as notebook, tablet or smartphone when you access our website. Cookies do not represent a threat to your computer and/or communication devices. In the following cases: Your Personal Data may be stored to enhance our online experience. It remembers the language and customizes the usage information according to your needs. This information is collected to confirm its unique features. Your safety information, including any products and services you are interested in. Cookies are also used to measure the amount of access to online services, modification of content based on your use, both before and present, and for advertising and public relations purposes. You can find out more about cookies via www.allaboutcookies.org
    </div>
    <div class="sub-title">
      How do we use cookies?
    </div>
    <div class="paragraph">
      We use cookies to record your visits and sign-up to the website. This information will be used to improve our website to facilitate the speed of using website. It is necessary to have a third party help to do so, which may require Internet Protocol Addresses (IP Addresses) and Statistical Analysis Cookies as well as linking information and processed for marketing purposes.
    </div>
    <div class="paragraph mt-6">
      Cookies can be divided into two categories based on their storage as follows:
    </div>
    <ol class="paragraph list-outside list-decimal ps-4">
      <li>
        <span class="underline">Session Cookies</span> : Cookies to remember you during your visit to our website. For example, keep track of the languages that you selected. This cookie will be deleted from your computer or device when you leave the website or have closed the web browser.
      </li>
      <li>
        <span class="underline">Persistent Cookies</span> : These are cookies that will last for a specified period or until you delete them. This type of cookie allows the website to remember you and your settings. This will help you to access the website services more conveniently and quickly when you come back to use the website again.
      </li>
    </ol>
    <div class="paragraph mt-6">
      Our Cookies are used for the following purposes:
    </div>
    <ul class="paragraph list-outside list-disc ps-4">
      <li>
        <span class="underline">Strictly Necessary Cookies</span> : This type of cookie is necessary for our website service. These allow you to access different parts of the website including helping to remember the information you have provided through the website. If disabling these type of cookies, you may not be able to use the services in its essence.
      </li>
      <li>
        <span class="underline">Performance cookies</span> : This type of cookie allows us to know the users’ interactions with the Company’s website including which pages or areas of the website are popular, as well as to analyze other information. We also use this information to improve the functionality of the website and to better understand user behavior. Although such information is not personally identifiable information and used for statistical analysis only, disabling these types of cookies will result in the Company being unable to know the number of visitors to the website and unable to assess the quality of service.
      </li>
    </ul>
    <div class="paragraph mt-4 rounded-md border border-gray-200 overflow-hidden overflow-x-auto">
      <table class="divide-gray-200 divide-y">
        <thead>
        <tr>
          <th>Type</th>
          <th class="min-w-96">Purpose</th>
          <th>Example of Cookies</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Strictly Necessary Cookies</td>
          <td>This type of cookie is necessary for our website service. These allow you to access different parts of the website including helping to remember the information you have provided through the website. If disabling these type of cookies, you may not be able to use the services in its essence.</td>
          <td>
            PHPSESSID<br>
            JSESSIONID
          </td>
        </tr>
        <tr>
          <td>Performance Cookies</td>
          <td>This type of cookie allows us to know the users’ interactions with the Company’s website including which pages or areas of the website are popular, as well as to analyze other information. We also use this information to improve the functionality of the website and to better understand user behavior. Although such information is not personally identifiable information  and used for statistical analysis only,   disabling these types of cookies will result in the Company being unable to know the number of visitors to the website and unable to evaluate the quality of service.</td>
          <td>
            __utmc<br>
            _hjIncludedInPageviewSample<br>
            _hjTLDTest<br>
            _gid<br>
            __utma<br>
            __utmb<br>
            __utmt<br>
            __utmz<br>
            _hjid<br>
            _ga<br>
            _hjAbsoluteSessionInProgress<br>
            _hjFirstSeen<br>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="sub-title mt-6">
      How do you manage Cookies?
    </div>
    <div class="paragraph">
      Most internet browsers are initially set up to automatically accept Cookies. By continuing to use our website or accepting optional cookies, you agree to our website’s cookie use as described in our Cookie Policy. However, you can decline or delete cookies through your browser settings. Please note that if you change your cookie settings, it will affect the form and functionality of our website. For further information about changing cookie settings, please follow the link below:
    </div>
    <ul class="paragraph list-outside list-disc pl-8">
      <li>
        Android (Chrome) <br>
        <NuxtLink class="link-style" target="_blank" to="https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DAndroid&hl=en&oco=1">
          https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DAndroid&hl=en&oco=1
        </NuxtLink>
      </li>
      <li>
        Apple Safari <br>
        <NuxtLink class="link-style" target="_blank" to="https://support.apple.com/en-gb/guide/safari/sfri11471/mac">
          https://support.apple.com/en-gb/guide/safari/sfri11471/mac
        </NuxtLink>
      </li>
      <li>
        Google Chrome <br>
        <NuxtLink class="link-style" target="_blank" to="https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&hl=en">
          https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&hl=en
        </NuxtLink>
      </li>
      <li>
        Microsoft Edge<br>
        <NuxtLink class="link-style" target="_blank" to="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd">
          https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd
        </NuxtLink>
      </li>
      <li>
        Microsoft Internet Explorer<br>
        <NuxtLink class="link-style" target="_blank" to="https://support.microsoft.com/en-us/topic/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d">
          https://support.microsoft.com/en-us/topic/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d
        </NuxtLink>
      </li>
      <li>
        Mozilla Firefox<br>
        <NuxtLink class="link-style" target="_blank" to="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop?redirectslug=enable-and-disable-cookies-website-preferences&redirectlocale=en-US">
          https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop?redirectslug=enable-and-disable-cookies-website-preferences&redirectlocale=en-US
        </NuxtLink>
      </li>
      <li>
        Opera<br>
        <NuxtLink class="link-style" target="_blank" to="https://help.opera.com/en/latest/web-preferences/">
          https://help.opera.com/en/latest/web-preferences/
        </NuxtLink>
      </li>
      <li>
        Iphone or Ipad (Chrome)<br>
        <NuxtLink class="link-style" target="_blank" to="https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DiOS&hl=en&oco=1">
          https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DiOS&hl=en&oco=1
        </NuxtLink>
      </li>
      <li>
        Iphone or Ipad (Safari)<br>
        <NuxtLink class="link-style" target="_blank" to="https://support.apple.com/en-us/HT201265">
          https://support.apple.com/en-us/HT201265
        </NuxtLink>
      </li>
    </ul>
    <div class="paragraph mt-4">
      Please note that if you choose to disable cookies on your browser or device, it may affect the functionality of our websites which unable to function or provide the services normally.
      <br>
      We are not responsible for and not affiliated with the websites mentioned above, including all their contents.
    </div>
    <div class="sub-title">
      Links to other websites
    </div>
    <div class="paragraph">
      Our website may contain links to third-party websites or social media. This also include embedding contents or videos from social media such as YouTube or Facebook. This will allow you to access content and interact with others on social media from our website. Third-party websites or social media will set cookies by themselves. We cannot control or be responsible for those cookies. We recommend that you read and review the policies or notices on the use of cookies by those third parties.
    </div>
    <div class="sub-title">
      Change to the Cookie policy
    </div>
    <div class="paragraph">
      This Cookie Policy may be updated from time to time to reflect changing circumstances and service provided. We will keep you informed on any further update on this website. Nevertheless, we encourage you to ensure that you understand the changes to the applicable version of this Cookie Policy.
    </div>
    <div class="sub-title">
      Contact Us
    </div>
    <div class="paragraph">
      In case you have questions about our cookie policy. You can contact us at Thai Cold Rolled Steel Sheet PLC at No. 28/1 Prapawit Building, 5th Floor, Surasak Road, Silom, Bangrak, Bangkok<br>
      Tel. 02-630-0300<br>
      Email: ITSUPPORT@tcrss.com
    </div>
  </div>



  <div v-else>
    <div class="paragraph">
      เมื่อท่านได้เข้าสู่เว็บไซต์ (http://www.tcrss.com/) ข้อมูลที่เกี่ยวข้องกับการเข้าสู่เว็บไซต์ของท่านจะถูกบันทึกไว้ในรูปแบบของคุกกี้ โดยนโยบายคุกกี้นี้จะอธิบายถึงความหมาย การทำงาน วัตถุประสงค์ รวมถึงการลบและการปฏิเสธการเก็บคุกกี้เพื่อความเป็นส่วนตัวของท่าน โดยการเข้าสู่เว็บไซต์นี้ถือว่าท่านได้อนุญาตให้เราใช้คุกกี้ตามนโยบายคุกกี้ที่มีรายละเอียดดังต่อไปนี้
    </div>
    <div class="sub-title">
      คุกกี้คืออะไร
    </div>
    <div class="paragraph">
      คุกกี้ คือ ไฟล์ขนาดเล็กที่ถูกสร้างขึ้นเพื่อจัดเก็บข้อมูลการเข้าใช้งานเว็บไซต์ เช่น วันเวลา ลิงค์ที่คลิก หน้าที่เข้าชม เงื่อนไขการตั้งค่าต่าง ๆ โดยจะบันทึกลงไปในอุปกรณ์คอมพิวเตอร์ และ/หรือ เครื่องมือสื่อสารที่เข้าใช้งานของท่าน เช่น Notebook Tablet หรือ Smartphone ผ่านทางเว็บเบราว์เซอร์ในขณะที่ท่านเข้าสู่เว็บไซต์ โดยคุกกี้จะไม่ก่อให้เกิดอันตรายต่ออุปกรณ์คอมพิวเตอร์ และ/หรือ เครื่องมือสื่อสารของท่าน ในกรณีดังต่อไปนี้ ข้อมูลส่วนบุคคลของท่านอาจถูกจัดเก็บเพื่อใช้เพิ่มประสบการณ์การใช้งานบริการทางออนไลน์ โดยจะจำเอกลักษณ์ของภาษาและปรับแต่งข้อมูลการใช้งานตามความต้องการของท่านเป็นการยืนยันคุณลักษณะเฉพาะตัว ข้อมูลความปลอดภัยของท่าน รวมถึงบริการที่ท่านสนใจ นอกจากนี้คุกกี้ยังถูกใช้เพื่อวัดปริมาณการเข้าใช้งานบริการทางออนไลน์ การปรับเปลี่ยนเนื้อหาตามการใช้งานของท่านโดยพิจารณาจากพฤติกรรมการเข้าใช้งานครั้งก่อนหน้าและ ณ ปัจจุบัน และอาจมีวัตถุประสงค์เพื่อการโฆษณาประชาสัมพันธ์ ทั้งนี้ ท่านสามารถค้นหาข้อมูลเพิ่มเติมเกี่ยวกับคุกกี้ได้ที่ www.allaboutcookies.org
    </div>
    <div class="sub-title">
      บริษัทใช้คุกกี้อย่างไร
    </div>
    <div class="paragraph">
      บริษัทใช้คุกกี้เพื่อบันทึกการเข้าเยี่ยมชมและสมัครเข้าใช้งานเว็บไซต์ของท่าน โดยทำให้บริษัทสามารถจดจำการใช้งานเว็บไซต์ของท่านได้ง่ายขึ้น และข้อมูลเหล่านี้จะถูกนำไปเพื่อปรับปรุงเว็บไซต์ของบริษัทให้ตรงกับความต้องการของท่าน มากยิ่งขึ้น เพื่ออำนวยความสะดวกให้เกิดความรวดเร็วในการใช้งานเว็บไซต์ของท่าน และในบางกรณีบริษัทจำเป็นต้องให้บุคคลที่สามช่วยดำเนินการดังกล่าว ซึ่งอาจจะต้องใช้อินเตอร์เน็ตโปรโตคอลแอดเดรส (IP Address) และคุกกี้เพื่อวิเคราะห์ทางสถิติ ตลอดจนเชื่อมโยงข้อมูลและประมวลผลตามวัตถุประสงค์ทางการตลาด
    </div>
    <div class="paragraph mt-6">
      คุกกี้ที่บริษัทใช้ อาจจะแบ่งได้ 2 ประเภทตามการจัดเก็บ ดังนี้
    </div>
    <ol class="paragraph list-outside list-decimal ps-4">
      <li>
        <span class="underline">Session Cookies</span> : เป็นคุกกี้ที่จะอยู่ชั่วคราวเพื่อจดจำท่านในระหว่างที่ท่านเข้าเยี่ยมชมเว็บไซต์ของบริษัท เช่น เฝ้าติดตามภาษาที่ท่านได้ตั้งค่าและเลือกใช้ เป็นต้น และจะมีการลบออกจากเครื่องคอมพิวเตอร์หรืออุปกรณ์ของท่าน เมื่อท่านออกจากเว็บไซต์หรือได้ทำการปิดเบราว์เซอร์
      </li>
      <li>
        <span class="underline">Persistent Cookies</span> : เป็นคุกกี้ที่จะอยู่ตามระยะเวลาที่กำหนดหรือจนกว่าท่านจะลบออก คุกกี้ประเภทนี้จะช่วยให้เว็บไซต์ของบริษัทจดจำท่านและการตั้งค่าต่าง ๆ ของท่านเมื่อท่านกลับมาใช้บริการเว็บไซต์อีกครั้ง
      </li>
    </ol>
    <div class="paragraph mt-6">
      วัตถุประสงค์ในการใช้งานคุกกี้ที่บริษัทใช้มีรายละเอียด ดังนี้
    </div>
    <ul class="paragraph list-outside list-disc ps-4">
      <li>
        <span class="underline">คุกกี้ที่มีความจำเป็น (Strictly Necessary)</span> : คุกกี้ประเภทนี้มีความจำเป็นต่อการให้บริการเว็บไซต์ของบริษัท เพื่อให้ท่านสามารถเข้าใช้งานในส่วนต่าง ๆ ของเว็บไซต์ รวมถึงช่วยจดจำข้อมูลที่ท่านเคยให้ไว้ผ่านเว็บไซต์ การปิดใช้งานคุกกี้ประเภทนี้จะส่งผลให้ท่านไม่สามารถใช้บริการในสาระสำคัญของบริษัทซึ่งจำเป็นต้องเรียกใช้คุกกี้ได้
      </li>
      <li>
        <span class="underline">คุกกี้เพื่อการวิเคราะห์และประเมินผลการใช้งาน (Performance Cookies)</span> : คุกกี้ประเภทนี้ช่วยให้บริษัททราบถึงการปฏิสัมพันธ์ของผู้ใช้งานในการใช้บริการเว็บไซต์ รวมถึงหน้าเพจหรือพื้นที่ใดของเว็บไซต์ที่ได้รับความนิยม ตลอดจนการวิเคราะห์ข้อมูลด้านอื่น ๆ บริษัทยังใช้ข้อมูลนี้เพื่อการปรับปรุงการทำงานของเว็บไซต์ และเพื่อเข้าใจพฤติกรรมของผู้ใช้งานมากขึ้น ถึงแม้ว่าข้อมูลที่คุกกี้นี้เก็บรวบรวมจะเป็นข้อมูลที่ไม่สามารถระบุตัวตนได้ และนำมาใช้วิเคราะห์ทางสถิติเท่านั้น การปิดใช้งานคุกกี้ประเภทนี้จะส่งผลให้บริษัทไม่สามารถทราบปริมาณผู้เข้าเยี่ยมชมเว็บไซต์ และไม่สามารถประเมินคุณภาพการให้บริการได้
      </li>
    </ul>
    <div class="paragraph mt-4 rounded-md border border-gray-200 overflow-hidden overflow-x-auto">
      <table class="divide-gray-200 divide-y">
        <thead>
        <tr>
          <th>ประเภทของคุกกี้</th>
          <th class="min-w-96">รายละเอียด</th>
          <th>ตัวอย่าง</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>คุกกี้ที่มีความจำเป็น (Strictly Necessary Cookies)</td>
          <td>คุกกี้ประเภทนี้มีความจำเป็นต่อการให้บริการเว็บไซต์ของบริษัท เพื่อให้ท่านสามารถเข้าใช้งานในส่วนต่าง ๆ ของเว็บไซต์ รวมถึงช่วยจดจำข้อมูลที่ท่านเคยให้ไว้ผ่านเว็บไซต์ การปิดการใช้งานคุกกี้ประเภทนี้จะส่งผลให้ท่านไม่สามารถใช้บริการในสาระสำคัญของบริษัทซึ่งจำเป็นต้องเรียกใช้คุกกี้ได้</td>
          <td>
            PHPSESSID<br>
            JSESSIONID
          </td>
        </tr>
        <tr>
          <td>คุกกี้เพื่อการวิเคราะห์และประเมินผลการใช้งาน (Performance Cookies)</td>
          <td>
            คุกกี้ประเภทนี้ช่วยให้บริษัททราบถึงการปฏิสัมพันธ์ของผู้ใช้งานในการใช้บริการเว็บไซต์ของบริษัทรวมถึงหน้าเพจหรือพื้นที่ใดของเว็บไซต์ที่ได้รับความนิยม ตลอดจนการวิเคราะห์ข้อมูลด้านอื่น ๆ บริษัทยังใช้ข้อมูลนี้เพื่อการปรับปรุงการทำงานของเว็บไซต์และเพื่อเข้าใจพฤติกรรมของผู้ใช้งานมากขึ้น ถึงแม้ว่าข้อมูลที่คุกกี้นี้เก็บรวบรวมจะเป็นข้อมูลที่ไม่สามารถระบุตัวตนได้ และนำมาใช้วิเคราะห์ทางสถิติเท่านั้น การปิดใช้งานคุกกี้ประเภทนี้จะส่งผลให้บริษัทไม่สามารถทราบปริมาณผู้เข้าเยี่ยมชมเว็บไซต์ และไม่สามารถประเมินคุณภาพการให้บริการได้
          </td>
          <td>
            __utmc<br>
            _hjIncludedInPageviewSample<br>
            _hjTLDTest<br>
            _gid<br>
            __utma<br>
            __utmb<br>
            __utmt<br>
            __utmz<br>
            _hjid<br>
            _ga<br>
            _hjAbsoluteSessionInProgress<br>
            _hjFirstSeen<br>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="sub-title mt-6">
      ท่านจะจัดการคุกกี้ได้อย่างไร
    </div>
    <div class="paragraph">
      เบราว์เซอร์ส่วนใหญ่จะมีการตั้งค่าให้มีการยอมรับคุกกี้เป็นค่าเริ่มต้น กรณีที่ท่านใช้งานเว็บไซต์นี้ต่อไปหรือเลือกยอมรับคุกกี้ ถือว่าท่านได้อนุญาตให้เราได้ใช้คุกกี้ตามนโยบายฉบับนี้ อย่างไรก็ตามท่านสามารถปฏิเสธการใช้งานหรือลบคุกกี้ในหน้าการตั้งค่าของเบราว์เซอร์ที่ท่านใช้งานอยู่ ทั้งนี้ หากท่านทำการปรับเปลี่ยนการตั้งค่าเบราว์เซอร์ของท่านอาจส่งผลกระทบต่อรูปแบบและการใช้งานบนหน้าเว็บไซต์ของเราได้ หากท่านประสงค์ที่จะทำการปรับเปลี่ยนการตั้งค่า ท่านสามารถตรวจสอบรายละเอียดเพิ่มเติมได้ตามลิงก์ที่ได้ระบุด้านล่าง
    </div>
    <ul class="paragraph list-outside list-disc ps-4">
      <li>
        Android (Chrome) <br>
        <NuxtLink class="link-style" target="_blank" to="https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DAndroid&hl=en&oco=1">
          https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DAndroid&hl=en&oco=1
        </NuxtLink>
      </li>
      <li>
        Apple Safari <br>
        <NuxtLink class="link-style" target="_blank" to="https://support.apple.com/en-gb/guide/safari/sfri11471/mac">
          https://support.apple.com/en-gb/guide/safari/sfri11471/mac
        </NuxtLink>
      </li>
      <li>
        Google Chrome <br>
        <NuxtLink class="link-style" target="_blank" to="https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&hl=en">
          https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&hl=en
        </NuxtLink>
      </li>
      <li>
        Microsoft Edge<br>
        <NuxtLink class="link-style" target="_blank" to="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd">
          https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd
        </NuxtLink>
      </li>
      <li>
        Microsoft Internet Explorer<br>
        <NuxtLink class="link-style" target="_blank" to="https://support.microsoft.com/en-us/topic/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d">
          https://support.microsoft.com/en-us/topic/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d
        </NuxtLink>
      </li>
      <li>
        Mozilla Firefox<br>
        <NuxtLink class="link-style" target="_blank" to="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop?redirectslug=enable-and-disable-cookies-website-preferences&redirectlocale=en-US">
          https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop?redirectslug=enable-and-disable-cookies-website-preferences&redirectlocale=en-US
        </NuxtLink>
      </li>
      <li>
        Opera<br>
        <NuxtLink class="link-style" target="_blank" to="https://help.opera.com/en/latest/web-preferences/">
          https://help.opera.com/en/latest/web-preferences/
        </NuxtLink>
      </li>
      <li>
        Iphone or Ipad (Chrome)<br>
        <NuxtLink class="link-style" target="_blank" to="https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DiOS&hl=en&oco=1">
          https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DiOS&hl=en&oco=1
        </NuxtLink>
      </li>
      <li>
        Iphone or Ipad (Safari)<br>
        <NuxtLink class="link-style" target="_blank" to="https://support.apple.com/en-us/HT201265">
          https://support.apple.com/en-us/HT201265
        </NuxtLink>
      </li>
    </ul>
    <div class="paragraph mt-4">
      ทั้งนี้ โปรดทราบว่าหากท่านเลือกที่จะปิดการใช้คุกกี้บนเบราว์เซอร์หรืออุปกรณ์ของท่าน อาจส่งผลกระทบกับการทำงานบางส่วนของเว็บไซต์ของบริษัทที่ไม่สามารถทำงานหรือให้บริการได้เป็นปกติ
      <br>
      บริษัทจะไม่รับผิดชอบและบริษัทไม่ได้มีความเกี่ยวข้องกับเว็บไซต์ รวมทั้งเนื้อหาในเว็บไซต์ต่าง ๆ ที่กล่าวมาข้างบน
    </div>
    <div class="sub-title">
      การเชื่อมโยงข้อมูลกับเว็บไซต์อื่น
    </div>
    <div class="paragraph">
      เว็บไซต์ของบริษัทอาจมีการเชื่อมโยงไปยังเว็บไซต์หรือโซเชียลมีเดียของบุคคลภายนอก รวมถึงอาจมีการฝังเนื้อหาหรือวิดีโอที่มาจากโซเชียลมีเดีย เช่น YouTube หรือ Facebook เป็นต้น ซึ่งจะช่วยให้ท่านเข้าถึงเนื้อหาและสร้างการปฏิสัมพันธ์กับบุคคลอื่นบนโซเชียลมีเดียจากเว็บไซต์ของบริษัทได้ ซึ่งเว็บไซต์หรือโซเชียลมีเดียของบุคคลภายนอกจะมีการกำหนดและตั้งค่าคุกกี้ขึ้นมาเอง โดยที่บริษัทไม่สามารถควบคุมหรือรับผิดชอบต่อคุกกี้เหล่านั้นได้ และขอแนะนำให้ท่านควรเข้าไปอ่านและศึกษานโยบายหรือประกาศการใช้คุกกี้ของบุคคลภายนอกเหล่านั้นด้วย
    </div>
    <div class="sub-title">
      การเปลี่ยนแปลงประกาศ
    </div>
    <div class="paragraph">
      ประกาศนี้อาจมีการปรับปรุงให้เหมาะสมและสอดคล้องกับสถานการณ์และตามการให้บริการจริง โดยบริษัทจะมีการแจ้งประกาศที่มีการปรับปรุงใหม่บนเว็บไซต์นี้ ดังนั้นบริษัทขอแนะนำให้ท่านตรวจสอบให้แน่ใจว่าท่านได้เข้าใจการเปลี่ยนแปลงตามข้อกำหนดดังกล่าว
    </div>
    <div class="sub-title">
      ติดต่อบริษัท
    </div>
    <div class="paragraph">
      ในกรณีที่ท่านมีคำถามเกี่ยวกับนโยบายคุกกี้ ท่านสามารถติดต่อสอบถามได้ที่ บริษัท เหล็กแผ่นรีดเย็นไทย จำกัด (มหาชน) 28/1 อาคารประภาวิทย์ ถนนสุรศักดิ์ แขวงสีลม เขตบางรัก กรุงเทพมหานคร<br>
      โทร: 02-630-0300<br>
      อีเมล: ITSUPPORT@tcrss.com
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

.link-style {
  @apply text-blue-500 hover:text-blue-600 hover:underline underline-offset-4 text-left
}

th {
  @apply font-bold px-4 py-2.5 text-left bg-gray-50
}
td {
  @apply px-4 py-2.5 bg-white text-wrap align-top first:min-w-32
}


table {
  position: relative;
  table-layout: auto;
  width: 100%;
  white-space: nowrap;
  tr>th:first-child,tr>td:first-child {
    position: sticky;
    left: 0;
  }
}
</style>
