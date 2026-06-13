import { 
  Building2,
  ReceiptText,
  BadgePercent,
  FileX,
  Stamp,
  Fingerprint,
  Users,
  Globe
} from 'lucide-react';

import companyRegistrationImg from '../assets/images/services/company-registration.webp';
import itrTdsImg from '../assets/images/services/itr-tds.webp';
import gstImg from '../assets/images/services/gst.webp';
import certificationsImg from '../assets/images/services/certifications.webp';
import partnershipImg from '../assets/images/services/partnership.webp';
import dscImg from '../assets/images/services/dsc.webp';
import iecImg from '../assets/images/services/iec.webp';
import closureImg from '../assets/images/services/closure.webp';

export const servicesData = [
  {
    id: 'company-registration',
    title: 'Company/LLP Registration and Compliances',
    description: 'Comprehensive services for the registration and ongoing compliances of companies and LLPs, ensuring a smooth and efficient experience.',
    icon: Building2,
    image: companyRegistrationImg,
    detailedDescription: `
<p>At our company, we offer comprehensive services for the registration of companies and limited liability partnerships (LLPs). We understand that establishing a business entity requires careful consideration of legal requirements, compliance obligations, and procedural formalities. Our dedicated team of experts is here to guide you through the entire registration process, ensuring a smooth and efficient experience.</p>
<div class="group bg-slate-50/50 dark:bg-slate-800/40 px-4 py-5 sm:px-6 md:px-8 md:py-6 rounded-3xl md:rounded-[2rem] mb-8 md:mb-10 mt-6 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-2xl hover:border-brand-teal/30 dark:hover:border-brand-teal/30 transition-all duration-500 hover:-translate-y-1">
  <h3 class="!mt-0 text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
    <div class="w-1.5 h-6 md:h-8 bg-brand-teal rounded-full"></div>
    Our services include:
  </h3>
  <ul class="space-y-4 md:space-y-6">

  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Consultation:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">We provide initial consultations to understand your business goals, structure, and specific requirements. Our team will offer expert advice on the most suitable type of entity (company or LLP) based on your objectives and provide guidance on the registration process.</span>
  </div>
</li>
  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Entity Selection and Name Reservation:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">We assist you in selecting the appropriate legal structure for your business, considering factors such as liability, ownership, taxation, and future growth plans. Once the structure is finalized, we help you reserve a unique and appropriate name for your company or LLP, ensuring compliance with naming guidelines and availability of the chosen name.</span>
  </div>
</li>
  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Documentation and Drafting:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">Our team prepares all the necessary documentation required for registration. This includes drafting the memorandum and articles of association (for companies) or the LLP agreement (for LLPs), as well as other required forms and declarations. We ensure that all documents are correctly prepared and comply with legal requirements.</span>
  </div>
</li>
  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Regulatory Compliance:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">We guide you through the entire registration process, ensuring compliance with all legal and regulatory obligations. We assist in obtaining the necessary approvals, licences, and registrations from relevant authorities, such as the Registrar of Companies (ROC) or the Ministry of Corporate Affairs (MCA).</span>
  </div>
</li>
  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Filing and Submission:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">We handle the filing and submission of all registration documents and forms on your behalf. Our team ensures that all required paperwork is accurately completed, signed, and submitted within the specified timelines, minimising any delays or rejections.</span>
  </div>
</li>
  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Communication with Authorities:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">We act as a liaison between your business and the relevant authorities throughout the registration process. We handle all correspondence, inquiries, and follow-ups with government agencies, ensuring smooth communication and addressing any queries or concerns promptly.</span>
  </div>
</li>
  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Statutory Compliance:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">Once the registration is completed, we provide guidance on ongoing statutory compliance requirements. This includes obtaining necessary registrations, such as Goods and Services Tax (GST) registration, professional tax registration, and any other applicable licences or permits.</span>
  </div>
</li>
  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Post-Registration Support:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">We continue to provide support after the registration process is complete. Our team can assist you with opening bank accounts, obtaining digital signatures, and any other post-registration requirements that may arise.</span>
  </div>
</li>

  </ul>
</div>
<p>By engaging our registration services, you can focus on developing your business while leaving the legal complexities and administrative tasks to our experienced professionals. We strive to make the registration process efficient, compliant, and hassle-free, allowing you to embark on your entrepreneurial journey with confidence.</p>

<h2>Company/LLP Compliances</h2>
<p>Our company offers comprehensive Company/LLP compliance services to help businesses stay compliant with the legal and regulatory requirements governing their operations. We understand the complexities involved in adhering to company law and LLP regulations and provide expert guidance to ensure that your company or LLP remains compliant at all times.</p>
<h3>Our Company/LLP compliance services include:</h3>
<div class="group bg-slate-50/50 dark:bg-slate-800/40 px-4 py-5 sm:px-6 md:px-8 md:py-6 rounded-3xl md:rounded-[2rem] mb-8 md:mb-10 mt-6 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-2xl hover:border-brand-teal/30 dark:hover:border-brand-teal/30 transition-all duration-500 hover:-translate-y-1">
  <h4 class="!mt-0 text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
    <div class="w-1.5 h-5 md:h-6 bg-brand-teal rounded-full"></div>
    Annual Compliance:
  </h4>
  <ul class="space-y-4 md:space-y-6">

  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Annual General Meeting (AGM):</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">We assist in conducting AGMs as per the prescribed timelines and requirements. Our team helps in preparing the necessary documents, resolutions, and minutes for the AGM and ensures compliance with all legal obligations.</span>
  </div>
</li>
  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Annual Returns:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">We handle the preparation and filing of annual returns with the concerned authorities, such as the Registrar of Companies (RoC) or the Ministry of Corporate Affairs (MCA). Our team ensures that all the required information and documents are accurately compiled and submitted within the specified deadlines.</span>
  </div>
</li>

  </ul>
</div>
<div class="group bg-slate-50/50 dark:bg-slate-800/40 px-4 py-5 sm:px-6 md:px-8 md:py-6 rounded-3xl md:rounded-[2rem] mb-8 md:mb-10 mt-6 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-2xl hover:border-brand-teal/30 dark:hover:border-brand-teal/30 transition-all duration-500 hover:-translate-y-1">
  <h4 class="!mt-0 text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
    <div class="w-1.5 h-5 md:h-6 bg-brand-teal rounded-full"></div>
    Statutory Filings and Registrations:
  </h4>
  <ul class="space-y-4 md:space-y-6">

  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Registrar of Companies (RoC) Filings:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">We assist in filing various forms and documents with the RoC, such as incorporation documents, changes in company structure or directors, appointment or resignation of key personnel, and other statutory filings as required.</span>
  </div>
</li>
  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">LLP Registrar Filings:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">For LLPs, we handle the filing of forms and documents with the LLP Registrar, including LLP agreement, changes in partners or designated partners, annual filings, and other necessary compliances.</span>
  </div>
</li>
  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Secretarial Compliance:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">Our team ensures compliance with secretarial requirements, such as maintenance of statutory registers, preparation of board resolutions, share transfer documentation, and other secretarial compliances.</span>
  </div>
</li>

  </ul>
</div>
<div class="group bg-slate-50/50 dark:bg-slate-800/40 px-4 py-5 sm:px-6 md:px-8 md:py-6 rounded-3xl md:rounded-[2rem] mb-8 md:mb-10 mt-6 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-2xl hover:border-brand-teal/30 dark:hover:border-brand-teal/30 transition-all duration-500 hover:-translate-y-1">
  <h4 class="!mt-0 text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
    <div class="w-1.5 h-5 md:h-6 bg-brand-teal rounded-full"></div>
    Board and Shareholder Meetings:
  </h4>
  <ul class="space-y-4 md:space-y-6">

  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Board Meetings:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">We assist in convening and conducting board meetings, preparing agendas, minutes, and resolutions in compliance with the Companies Act or LLP regulations. Our team ensures that all legal formalities are met and documented accurately.</span>
  </div>
</li>
  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Extraordinary General Meeting (EGM):</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">In the case of special resolutions or important decisions requiring shareholder approval, we assist in convening EGMs and ensure compliance with the legal requirements.</span>
  </div>
</li>

  </ul>
</div>
<div class="group bg-slate-50/50 dark:bg-slate-800/40 px-4 py-5 sm:px-6 md:px-8 md:py-6 rounded-3xl md:rounded-[2rem] mb-8 md:mb-10 mt-6 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-2xl hover:border-brand-teal/30 dark:hover:border-brand-teal/30 transition-all duration-500 hover:-translate-y-1">
  <h4 class="!mt-0 text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
    <div class="w-1.5 h-5 md:h-6 bg-brand-teal rounded-full"></div>
    Compliance Advisory Services:
  </h4>
  <ul class="space-y-4 md:space-y-6">

  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Compliance Review:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">Our team conducts comprehensive compliance reviews to assess the current compliance status of your company or LLP. We identify areas of non-compliance, provide recommendations, and develop action plans to rectify any deficiencies.</span>
  </div>
</li>
  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Compliance Updates:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">We keep you informed about changes in relevant laws, regulations, and compliance requirements that may affect your company or LLP. Our team provides timely updates and guidance on the necessary actions to maintain compliance.</span>
  </div>
</li>

  </ul>
</div>
<div class="group bg-slate-50/50 dark:bg-slate-800/40 px-4 py-5 sm:px-6 md:px-8 md:py-6 rounded-3xl md:rounded-[2rem] mb-8 md:mb-10 mt-6 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-2xl hover:border-brand-teal/30 dark:hover:border-brand-teal/30 transition-all duration-500 hover:-translate-y-1">
  <h4 class="!mt-0 text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
    <div class="w-1.5 h-5 md:h-6 bg-brand-teal rounded-full"></div>
    Legal and Regulatory Support:
  </h4>
  <ul class="space-y-4 md:space-y-6">

  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Legal Opinion and Advice:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">Our experienced legal professionals provide expert opinions and advice on various legal and regulatory matters related to company law and LLP regulations. We assist in addressing legal queries, resolving compliance issues, and mitigating potential risks.</span>
  </div>
</li>
  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Due Diligence:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">We conduct due diligence exercises to ensure compliance with regulatory frameworks and identify any potential legal or compliance risks. Our team helps you establish robust systems and processes to mitigate risks and maintain compliance.</span>
  </div>
</li>

  </ul>
</div>
<p>By availing our Company/LLP compliance services, you can focus on your core business activities while having the peace of mind that your company or LLP remains compliant with applicable laws and regulations. Our dedicated team of professionals ensures that all necessary compliances are met, enabling you to operate smoothly within the legal framework.</p>
`,
    features: [
      'Entity Selection and Name Reservation',
      'Documentation and Drafting',
      'Filing and Submission',
      'Annual General Meeting (AGM) & Annual Returns',
      'Registrar of Companies (RoC) Filings',
      'Compliance Advisory & Legal Support'
    ],
    process: [
      { title: 'Initial Consultation', description: 'We discuss your requirements and understand your business goals.' },
      { title: 'Document Preparation', description: 'Our experts gather and prepare all necessary legal documents.' },
      { title: 'Filing & Processing', description: 'We submit the applications to the relevant government authorities.' },
      { title: 'Completion & Delivery', description: 'You receive the final approved certificates and documents.' }
    ],
  },
  {
    id: 'itr-tds',
    title: 'Income Tax Return Filing and TDS Compliances',
    description: 'Comprehensive services for income tax return filing and Tax Deducted at Source (TDS) compliance.',
    icon: ReceiptText,
    image: itrTdsImg,
    detailedDescription: `
<p>Our company offers comprehensive services for income tax return filing and Tax Deducted at Source (TDS) compliance. We understand the complexities and evolving regulations of the income tax system, and our dedicated team of tax professionals is here to ensure accurate and timely filing of your tax returns and compliance with TDS obligations.</p>
<h3>Our services include:</h3>
<div class="group bg-slate-50/50 dark:bg-slate-800/40 px-4 py-5 sm:px-6 md:px-8 md:py-6 rounded-3xl md:rounded-[2rem] mb-8 md:mb-10 mt-6 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-2xl hover:border-brand-teal/30 dark:hover:border-brand-teal/30 transition-all duration-500 hover:-translate-y-1">
  <h4 class="!mt-0 text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
    <div class="w-1.5 h-5 md:h-6 bg-brand-teal rounded-full"></div>
    Income Tax Return Filing:
  </h4>
  <ul class="space-y-4 md:space-y-6">

  <li class="flex gap-3 md:gap-4">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Assessment and Data Gathering:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">We assess your tax situation and gather all relevant financial information, including income from various sources, deductions, exemptions, and tax-saving investments.</span>
  </div>
</li>
  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Preparation of Tax Returns:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">Our experienced tax professionals prepare your income tax returns accurately and efficiently, ensuring compliance with the latest tax laws and regulations.</span>
  </div>
</li>
  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Filing and Submission:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">We electronically file your tax returns with the tax authorities within the stipulated deadlines, eliminating the hassle of manual submissions.</span>
  </div>
</li>

  </ul>
</div>
<div class="group bg-slate-50/50 dark:bg-slate-800/40 px-4 py-5 sm:px-6 md:px-8 md:py-6 rounded-3xl md:rounded-[2rem] mb-8 md:mb-10 mt-6 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-2xl hover:border-brand-teal/30 dark:hover:border-brand-teal/30 transition-all duration-500 hover:-translate-y-1">
  <h4 class="!mt-0 text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
    <div class="w-1.5 h-5 md:h-6 bg-brand-teal rounded-full"></div>
    TDS Compliance:
  </h4>
  <ul class="space-y-4 md:space-y-6">

  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">TDS Calculation and Deduction:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">We assist you in calculating the applicable TDS for payments made to employees, contractors, vendors, or any other parties as per the provisions of the Income Tax Act. We ensure accurate TDS deductions based on the nature of payments, rates, and thresholds.</span>
  </div>
</li>
  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">TDS Return Preparation and Filing:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">Our team prepares and files TDS returns, including Form 24Q for salaries, Form 26Q for non-salary payments, and Form 27Q for payments made to non-resident individuals or entities. We ensure that the TDS returns are filed on time and in compliance with the prescribed formats.</span>
  </div>
</li>
  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">TDS Certificate Issuance:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">We generate TDS certificates (Form 16, Form 16A, etc.) for employees, contractors, or other deductees, reflecting the TDS amounts deducted and deposited. These certificates are essential for deductees to claim credit for TDS while filing their income tax returns.</span>
  </div>
</li>

  </ul>
</div>
<div class="group bg-slate-50/50 dark:bg-slate-800/40 px-4 py-5 sm:px-6 md:px-8 md:py-6 rounded-3xl md:rounded-[2rem] mb-8 md:mb-10 mt-6 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-2xl hover:border-brand-teal/30 dark:hover:border-brand-teal/30 transition-all duration-500 hover:-translate-y-1">
  <h4 class="!mt-0 text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
    <div class="w-1.5 h-5 md:h-6 bg-brand-teal rounded-full"></div>
    Compliance Monitoring and Advisory:
  </h4>
  <ul class="space-y-4 md:space-y-6">

  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Compliance Monitoring:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">We keep track of important deadlines for income tax return filing and TDS compliance, ensuring that all obligations are met in a timely manner. We send regular reminders to ensure you stay compliant and avoid penalties.</span>
  </div>
</li>
  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Advisory Services:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">Our team provides expert advice and guidance on various income tax and TDS matters. We assist in understanding tax-saving opportunities, optimising deductions, resolving tax-related queries, and keeping you informed about changes in tax laws and regulations.</span>
  </div>
</li>

  </ul>
</div>
<div class="group bg-slate-50/50 dark:bg-slate-800/40 px-4 py-5 sm:px-6 md:px-8 md:py-6 rounded-3xl md:rounded-[2rem] mb-8 md:mb-10 mt-6 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-2xl hover:border-brand-teal/30 dark:hover:border-brand-teal/30 transition-all duration-500 hover:-translate-y-1">
  <h4 class="!mt-0 text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
    <div class="w-1.5 h-5 md:h-6 bg-brand-teal rounded-full"></div>
    Representation and Assistance:
  </h4>
  <ul class="space-y-4 md:space-y-6">

  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Representation with Tax Authorities:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">In case of any tax notices, queries, or assessments, we can represent you before the tax authorities, providing necessary explanations, documentation, and support.</span>
  </div>
</li>
  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Assistance in Tax Assessments:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">If your tax return is selected for scrutiny or assessment, we assist you throughout the process, helping you gather the required information, preparing responses, and representing you before the tax authorities, if needed.</span>
  </div>
</li>

  </ul>
</div>
<p>By engaging our income tax return filing and TDS compliance services, you can ensure accurate and timely compliance with tax obligations while minimising the risk of penalties or legal issues. Our team stays updated with the latest tax regulations, allowing you to focus on your core business activities with peace of mind.</p>
`,
    features: [
      'Assessment and Data Gathering',
      'Preparation and Filing of Tax Returns',
      'TDS Calculation and Deduction',
      'TDS Return Preparation and Filing',
      'TDS Certificate Issuance',
      'Representation with Tax Authorities'
    ],
    process: [
      { title: 'Initial Consultation', description: 'We discuss your requirements and understand your business goals.' },
      { title: 'Document Preparation', description: 'Our experts gather and prepare all necessary legal documents.' },
      { title: 'Filing & Processing', description: 'We submit the applications to the relevant government authorities.' },
      { title: 'Completion & Delivery', description: 'You receive the final approved certificates and documents.' }
    ],
  },
  {
    id: 'gst',
    title: 'GST Registration & Compliances',
    description: 'Accurate and seamless GST registration and compliance for your business, backed by expert tax professionals.',
    icon: BadgePercent,
    image: gstImg,
    detailedDescription: `
<p>Our company offers comprehensive services for Goods and Services Tax (GST) registration and compliance. We understand the complexities and evolving regulations of the GST system, and our dedicated team of tax professionals is here to ensure accurate and seamless GST registration and compliance for your business.</p>
<h3>Our services include:</h3>
<div class="group bg-slate-50/50 dark:bg-slate-800/40 px-4 py-5 sm:px-6 md:px-8 md:py-6 rounded-3xl md:rounded-[2rem] mb-8 md:mb-10 mt-6 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-2xl hover:border-brand-teal/30 dark:hover:border-brand-teal/30 transition-all duration-500 hover:-translate-y-1">
  <h4 class="!mt-0 text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
    <div class="w-1.5 h-5 md:h-6 bg-brand-teal rounded-full"></div>
    GST Registration:
  </h4>
  <ul class="space-y-4 md:space-y-6">

  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Assessment and Consultation:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">We assess your business operations, turnover, and other relevant factors to determine whether GST registration is mandatory for your business. Our team provides expert advice on the applicability of GST and guides you through the registration process.</span>
  </div>
</li>
  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Documentation and Application:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">We assist you in preparing and submitting the necessary documentation, such as business details, constitution documents, and supporting records, required for GST registration. We ensure that the application is correctly filled out and submitted to the appropriate tax authorities.</span>
  </div>
</li>
  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Follow-up and Approval:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">We follow up with the tax authorities on the status of your GST registration application, addressing any queries or additional requirements, if needed, to facilitate the approval process.</span>
  </div>
</li>

  </ul>
</div>
<div class="group bg-slate-50/50 dark:bg-slate-800/40 px-4 py-5 sm:px-6 md:px-8 md:py-6 rounded-3xl md:rounded-[2rem] mb-8 md:mb-10 mt-6 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-2xl hover:border-brand-teal/30 dark:hover:border-brand-teal/30 transition-all duration-500 hover:-translate-y-1">
  <h4 class="!mt-0 text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
    <div class="w-1.5 h-5 md:h-6 bg-brand-teal rounded-full"></div>
    GST Compliance:
  </h4>
  <ul class="space-y-4 md:space-y-6">

  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">GST Return Filing:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">Our experienced tax professionals prepare and file your GST returns, including monthly, quarterly, or annual returns, as per the applicable GST regulations. We ensure accurate calculation of GST liabilities, input tax credits, and compliance with GST reporting requirements.</span>
  </div>
</li>
  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Input Tax Credit Reconciliation:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">We assist you in reconciling your input tax credits with the purchases and expenses incurred, ensuring that you claim the maximum allowable credits while complying with GST laws and regulations.</span>
  </div>
</li>
  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Compliance Monitoring:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">We keep track of important deadlines for GST return filing, payment of taxes, and other compliance obligations. Our team sends regular reminders to ensure timely compliance, helping you avoid penalties and interest charges.</span>
  </div>
</li>
  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">GST Audit Assistance:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">If your business is selected for a GST audit, we provide support throughout the audit process. We assist in preparing the necessary documentation, responding to audit queries, and representing you before the tax authorities, if required.</span>
  </div>
</li>
  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Advisory Services:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">Our team provides expert advice and guidance on various GST matters. We help you understand the GST implications of business transactions, optimise input tax credits, comply with GST provisions for specific industries or transactions, and stay updated with changes in GST regulations.</span>
  </div>
</li>

  </ul>
</div>
<div class="group bg-slate-50/50 dark:bg-slate-800/40 px-4 py-5 sm:px-6 md:px-8 md:py-6 rounded-3xl md:rounded-[2rem] mb-8 md:mb-10 mt-6 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-2xl hover:border-brand-teal/30 dark:hover:border-brand-teal/30 transition-all duration-500 hover:-translate-y-1">
  <h4 class="!mt-0 text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
    <div class="w-1.5 h-5 md:h-6 bg-brand-teal rounded-full"></div>
    GST Amendments and Cancellations:
  </h4>
  <ul class="space-y-4 md:space-y-6">

  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Amendments to GST Registration:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">We assist you in making amendments to your GST registration details, such as changes in business address, contact information, or addition/removal of business partners. We ensure that the amendments are correctly documented and communicated to the tax authorities.</span>
  </div>
</li>
  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">GST Cancellation:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">If your business undergoes changes that require the cancellation of GST registration, we guide you through the cancellation process. We prepare and submit the necessary documentation to cancel your GST registration with the tax authorities, ensuring compliance with applicable regulations.</span>
  </div>
</li>

  </ul>
</div>
<p>By engaging our GST registration and compliance services, you can ensure accurate and seamless compliance with GST obligations, minimise the risk of penalties or legal issues, and focus on your core business activities. Our team stays updated with the latest GST regulations, ensuring that your business remains GST-compliant at all times.</p>
`,
    features: [
      'Assessment and Consultation',
      'GST Registration Documentation & Application',
      'GST Return Filing',
      'Input Tax Credit Reconciliation',
      'GST Audit Assistance & Advisory',
      'Amendments and Cancellations'
    ],
    process: [
      { title: 'Initial Consultation', description: 'We discuss your requirements and understand your business goals.' },
      { title: 'Document Preparation', description: 'Our experts gather and prepare all necessary legal documents.' },
      { title: 'Filing & Processing', description: 'We submit the applications to the relevant government authorities.' },
      { title: 'Completion & Delivery', description: 'You receive the final approved certificates and documents.' }
    ],
  },
  {
    id: 'certifications',
    title: 'Shop Act, RERA, MSME, Udyam, Trademark',
    description: 'Expert assistance for Shop Act, RERA, MSME/Udyam, and Trademark registration to ensure compliance and protect your business interests.',
    icon: Stamp,
    image: certificationsImg,
    detailedDescription: `
<p>Our company provides a comprehensive range of services related to Shop Act Registration, Real Estate Regulatory Authority (RERA) Compliance, MSME (Micro, Small, and Medium Enterprises) Registration, Udyam Registration, and Trademark-related services. We understand the legal and regulatory requirements associated with these areas and offer expert assistance to ensure compliance and protection of your business interests.</p>
<div class="group bg-slate-50/50 dark:bg-slate-800/40 px-4 py-5 sm:px-6 md:px-8 md:py-6 rounded-3xl md:rounded-[2rem] mb-8 md:mb-10 mt-6 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-2xl hover:border-brand-teal/30 dark:hover:border-brand-teal/30 transition-all duration-500 hover:-translate-y-1">
  <h4 class="!mt-0 text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
    <div class="w-1.5 h-5 md:h-6 bg-brand-teal rounded-full"></div>
    Shop Act Registration:
  </h4>
  <ul class="space-y-4 md:space-y-6">

  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Consultation and Assessment:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">We provide consultation on the applicability of the Shop Act registration for your business based on factors such as nature of business, number of employees, and location. Our team assesses your requirements and guides you through the registration process.</span>
  </div>
</li>
  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Documentation and Application:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">We assist you in preparing the required documentation, such as identity proofs, address proofs, and business details, for Shop Act registration. We ensure that the application is correctly filled out and submitted to the respective authorities.</span>
  </div>
</li>
  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Compliance Support:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">We help you comply with ongoing Shop Act regulations, such as the maintenance of registers, submission of periodic returns, and other obligations. Our team provides guidance to ensure that your business operations align with the Shop Act requirements.</span>
  </div>
</li>

  </ul>
</div>
<div class="group bg-slate-50/50 dark:bg-slate-800/40 px-4 py-5 sm:px-6 md:px-8 md:py-6 rounded-3xl md:rounded-[2rem] mb-8 md:mb-10 mt-6 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-2xl hover:border-brand-teal/30 dark:hover:border-brand-teal/30 transition-all duration-500 hover:-translate-y-1">
  <h4 class="!mt-0 text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
    <div class="w-1.5 h-5 md:h-6 bg-brand-teal rounded-full"></div>
    RERA Compliance:
  </h4>
  <ul class="space-y-4 md:space-y-6">

  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Consultation and Advisory:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">We offer expert advice on the applicability of RERA registration for real estate projects and guide you through the compliance process. Our team helps you understand the obligations, timelines, and documentation requirements associated with RERA.</span>
  </div>
</li>
  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Registration Support:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">We assist you in preparing and filing the necessary documents, such as project details, financial information, and legal agreements, for RERA registration. We ensure compliance with the prescribed formats and submission deadlines.</span>
  </div>
</li>
  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Compliance Monitoring:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">We provide ongoing support to ensure compliance with RERA regulations, including timely filing of periodic reports, maintenance of project accounts, and adherence to disclosure requirements. Our team helps you stay updated with any changes in RERA provisions.</span>
  </div>
</li>

  </ul>
</div>
<div class="group bg-slate-50/50 dark:bg-slate-800/40 px-4 py-5 sm:px-6 md:px-8 md:py-6 rounded-3xl md:rounded-[2rem] mb-8 md:mb-10 mt-6 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-2xl hover:border-brand-teal/30 dark:hover:border-brand-teal/30 transition-all duration-500 hover:-translate-y-1">
  <h4 class="!mt-0 text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
    <div class="w-1.5 h-5 md:h-6 bg-brand-teal rounded-full"></div>
    MSME and Udyam Registration:
  </h4>
  <ul class="space-y-4 md:space-y-6">

  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Eligibility Assessment:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">We evaluate your business's eligibility for MSME registration or Udyam registration (the new name for MSME registration) based on criteria such as investment in plant and machinery or turnover. Our team provides guidance on the benefits and requirements associated with these registrations.</span>
  </div>
</li>
  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Documentation and Application:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">We assist you in preparing and filing the necessary documentation, such as business details, financial statements, and registration forms, for MSME or Udyam registration. We ensure compliance with the specified eligibility criteria and registration processes.</span>
  </div>
</li>
  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Post-Registration Support:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">Our team provides guidance on availing various benefits and schemes available for MSMEs and assists you in obtaining necessary certificates and documents after registration.</span>
  </div>
</li>

  </ul>
</div>
<div class="group bg-slate-50/50 dark:bg-slate-800/40 px-4 py-5 sm:px-6 md:px-8 md:py-6 rounded-3xl md:rounded-[2rem] mb-8 md:mb-10 mt-6 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-2xl hover:border-brand-teal/30 dark:hover:border-brand-teal/30 transition-all duration-500 hover:-translate-y-1">
  <h4 class="!mt-0 text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
    <div class="w-1.5 h-5 md:h-6 bg-brand-teal rounded-full"></div>
    Trademark-related Services:
  </h4>
  <ul class="space-y-4 md:space-y-6">

  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Trademark Search and Analysis:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">We conduct comprehensive trademark searches to determine the availability and uniqueness of your desired trademark. Our team provides analysis and recommendations to ensure the successful registration and protection of your trademark.</span>
  </div>
</li>
  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Trademark Registration:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">We assist you in preparing and filing trademark applications with the relevant trademark authorities. Our team ensures that all required documentation, including trademark representations and class specifications, is accurately completed and submitted.</span>
  </div>
</li>
  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Trademark Renewal and Protection:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">We help you manage the renewal process for your registered trademarks, ensuring that they remain valid and protected. Our team also provides guidance on trademark infringement issues, enforcement actions, and protecting your intellectual property rights.</span>
  </div>
</li>

  </ul>
</div>
<p>By engaging our services for Shop Act registration, RERA compliance, MSME or Udyam registration, and trademark-related matters, you can navigate through the legal requirements, ensure compliance, and protect your business interests. Our experienced professionals provide personalised assistance and keep you updated with any changes in the relevant laws and regulations.</p>
`,
    features: [
      'Shop Act Registration & Compliance',
      'RERA Consultation and Registration Support',
      'MSME/Udyam Eligibility Assessment & Filing',
      'Trademark Search and Analysis',
      'Trademark Registration Application',
      'Trademark Renewal and Protection'
    ],
    process: [
      { title: 'Initial Consultation', description: 'We discuss your requirements and understand your business goals.' },
      { title: 'Document Preparation', description: 'Our experts gather and prepare all necessary legal documents.' },
      { title: 'Filing & Processing', description: 'We submit the applications to the relevant government authorities.' },
      { title: 'Completion & Delivery', description: 'You receive the final approved certificates and documents.' }
    ],
  },
  {
    id: 'partnership',
    title: 'Partnership Firm Registration',
    description: 'Comprehensive services for partnership firm registration, assisting aspiring entrepreneurs in establishing a legally recognized partnership.',
    icon: Users,
    image: partnershipImg,
    detailedDescription: `
<p>Our company offers comprehensive services for partnership firm registration, assisting aspiring entrepreneurs and businesses in establishing a legally recognized partnership structure. We understand the importance of a well-structured partnership and the legal requirements involved. Our dedicated team of professionals is here to guide you through the partnership firm registration process, ensuring a seamless and compliant experience.</p>
<h3>Our services include:</h3>
<div class="group bg-slate-50/50 dark:bg-slate-800/40 px-4 py-5 sm:px-6 md:px-8 md:py-6 rounded-3xl md:rounded-[2rem] mb-8 md:mb-10 mt-6 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-2xl hover:border-brand-teal/30 dark:hover:border-brand-teal/30 transition-all duration-500 hover:-translate-y-1">
  <h4 class="!mt-0 text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
    <div class="w-1.5 h-5 md:h-6 bg-brand-teal rounded-full"></div>
    Consultation and Guidance
  </h4>
  <ul class="space-y-4 md:space-y-6">

  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Initial Consultation:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">We provide an initial consultation to understand your business goals, objectives, and partnership requirements. Our team offers expert advice on the partnership structure, rights and obligations of partners, profit-sharing arrangements, and other essential aspects of a partnership.</span>
  </div>
</li>
  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Partnership Agreement:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">We assist you in drafting a comprehensive partnership agreement that clearly outlines the terms and conditions agreed upon by the partners. The partnership agreement covers aspects such as capital contributions, profit distribution, decision-making processes, dispute resolution, and exit mechanisms.</span>
  </div>
</li>

  </ul>
</div>
<div class="group bg-slate-50/50 dark:bg-slate-800/40 px-4 py-5 sm:px-6 md:px-8 md:py-6 rounded-3xl md:rounded-[2rem] mb-8 md:mb-10 mt-6 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-2xl hover:border-brand-teal/30 dark:hover:border-brand-teal/30 transition-all duration-500 hover:-translate-y-1">
  <h4 class="!mt-0 text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
    <div class="w-1.5 h-5 md:h-6 bg-brand-teal rounded-full"></div>
    Documentation and Registration:
  </h4>
  <ul class="space-y-4 md:space-y-6">

  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Preparation of Documents:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">Our team prepares all the necessary documents required for partnership firm registration. This includes the partnership deed, application forms, identity proofs, and address proofs of the partners.</span>
  </div>
</li>
  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Application Submission:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">We ensure that all the registration documents are correctly filled out and comply with the legal requirements. Our team submits the application to the appropriate authority, such as the Registrar of Firms or the concerned government department, on your behalf.</span>
  </div>
</li>
  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Follow-up and Approval:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">We follow up with the authorities on the status of your partnership firm registration application, addressing any queries or additional requirements, if needed, to expedite the approval process.</span>
  </div>
</li>

  </ul>
</div>
<div class="group bg-slate-50/50 dark:bg-slate-800/40 px-4 py-5 sm:px-6 md:px-8 md:py-6 rounded-3xl md:rounded-[2rem] mb-8 md:mb-10 mt-6 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-2xl hover:border-brand-teal/30 dark:hover:border-brand-teal/30 transition-all duration-500 hover:-translate-y-1">
  <h4 class="!mt-0 text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
    <div class="w-1.5 h-5 md:h-6 bg-brand-teal rounded-full"></div>
    Compliance Assistance:
  </h4>
  <ul class="space-y-4 md:space-y-6">

  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">PAN and TAN Application:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">We assist in obtaining the Permanent Account Number (PAN) and Tax Deduction and Collection Account Number (TAN) for the partnership firm. These are essential for various taxation and financial transactions.</span>
  </div>
</li>
  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">GST Registration:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">If your partnership firm meets the GST registration threshold, we guide you through the process of GST registration. We ensure compliance with GST laws and assist in obtaining the necessary GST identification number.</span>
  </div>
</li>
  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Compliance Monitoring:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">We provide guidance on ongoing compliance obligations, such as filing of income tax returns, GST returns (if applicable), and other statutory filings. Our team ensures that you remain compliant with relevant laws and regulations.</span>
  </div>
</li>

  </ul>
</div>
<div class="group bg-slate-50/50 dark:bg-slate-800/40 px-4 py-5 sm:px-6 md:px-8 md:py-6 rounded-3xl md:rounded-[2rem] mb-8 md:mb-10 mt-6 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-2xl hover:border-brand-teal/30 dark:hover:border-brand-teal/30 transition-all duration-500 hover:-translate-y-1">
  <h4 class="!mt-0 text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
    <div class="w-1.5 h-5 md:h-6 bg-brand-teal rounded-full"></div>
    Post-Registration Support:
  </h4>
  <ul class="space-y-4 md:space-y-6">

  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Amendments and Modifications:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">If any changes or amendments need to be made to the partnership firm, such as adding or removing partners or altering the terms of the partnership agreement, we assist you in making the necessary modifications and updating the registration records.</span>
  </div>
</li>
  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Dissolution and Closure:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">In the event of the dissolution or closure of the partnership firm, we provide guidance on the necessary procedures and documentation required to formally dissolve the partnership and wind up its operations.</span>
  </div>
</li>

  </ul>
</div>
<p>By engaging our partnership firm registration services, you can establish a legally recognized partnership structure, ensure compliance with applicable laws and regulations, and establish a solid foundation for your business endeavors. Our team strives to make the registration process efficient, transparent, and tailored to your specific requirements.</p>
`,
    features: [
      'Consultation and Partnership Structure Guidance',
      'Partnership Agreement Drafting',
      'Preparation of Documents and Identity Proofs',
      'Application Submission to Registrar of Firms',
      'PAN and TAN Application',
      'Amendments, Modifications, and Dissolution'
    ],
    process: [
      { title: 'Initial Consultation', description: 'We discuss your requirements and understand your business goals.' },
      { title: 'Document Preparation', description: 'Our experts gather and prepare all necessary legal documents.' },
      { title: 'Filing & Processing', description: 'We submit the applications to the relevant government authorities.' },
      { title: 'Completion & Delivery', description: 'You receive the final approved certificates and documents.' }
    ],
  },
  {
    id: 'dsc',
    title: 'Digital Signature Certificate (DSC) Services',
    description: 'Secure and reliable Digital Signature Certificates (DSC) to streamline your online transactions and document signing.',
    icon: Fingerprint,
    image: dscImg,
    detailedDescription: `
<p>As a leading provider of Digital Signature Certificates (DSC), we offer secure and reliable solutions for individuals and businesses in need of legally recognized digital signatures. Our aim is to streamline your online transactions and document signing processes by providing robust authentication and data integrity.</p>
<div class="group bg-slate-50/50 dark:bg-slate-800/40 px-4 py-5 sm:px-6 md:px-8 md:py-6 rounded-3xl md:rounded-[2rem] mb-8 md:mb-10 mt-6 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-2xl hover:border-brand-teal/30 dark:hover:border-brand-teal/30 transition-all duration-500 hover:-translate-y-1">
  <h3 class="!mt-0 text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
    <div class="w-1.5 h-6 md:h-8 bg-brand-teal rounded-full"></div>
    Our DSC services include:
  </h3>
  <ul class="space-y-4 md:space-y-6">

  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Wide Range of Certificates:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">We offer a wide range of digital signature certificates, including Class 2, Class 3, and specialised certificates tailored to specific industry requirements. Whether you need a certificate for e-filing, e-tendering, or other digital transactions, we have the right solution for you.</span>
  </div>
</li>
  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Quick and Hassle-free Application Process:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">Our application process is designed to be quick and hassle-free. Our experienced team guides you through the necessary documentation, ensuring that all required information is accurately provided. We handle the entire application submission process, saving you time and effort.</span>
  </div>
</li>
  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Authorised Certification Authorities:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">We work with authorised Certification Authorities (CAs) approved by the government to issue digital signature certificates. Our partnerships with trusted CAs guarantee the validity and compliance of the certificates, giving you peace of mind in your digital transactions.</span>
  </div>
</li>
  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Seamless Installation and Configuration:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">Our team provides comprehensive support in installing and configuring your digital signature certificate. We guide you through the installation process, ensuring that the certificate is correctly set up on your computer or mobile device. We also offer assistance in configuring the certificate with various software applications and platforms.</span>
  </div>
</li>
  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Renewal and Revocation Services:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">We offer timely renewal reminders to ensure uninterrupted usage of your digital signature certificate. Our team assists you in initiating the renewal process and ensures compliance with the renewal requirements. If the need arises, we also provide support for revoking or cancelling your certificate.</span>
  </div>
</li>
  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Expert Customer Support:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">Our dedicated customer support team is available to address any queries or concerns you may have regarding your digital signature certificate. We provide prompt assistance, ensuring a smooth experience throughout the entire process.</span>
  </div>
</li>

  </ul>
</div>
<p>By choosing our DSC services, you can enhance the security and credibility of your online transactions and document signing. Our commitment to customer satisfaction, coupled with our expertise in digital signatures, ensures that you receive a reliable and trusted solution for your digital authentication needs.</p>
`,
    features: [
      'Wide Range of Certificates (Class 2, Class 3)',
      'Quick and Hassle-free Application Process',
      'Authorised Certification Authorities',
      'Seamless Installation and Configuration',
      'Renewal and Revocation Services',
      'Expert Customer Support'
    ],
    process: [
      { title: 'Initial Consultation', description: 'We discuss your requirements and understand your business goals.' },
      { title: 'Document Preparation', description: 'Our experts gather and prepare all necessary legal documents.' },
      { title: 'Filing & Processing', description: 'We submit the applications to the relevant government authorities.' },
      { title: 'Completion & Delivery', description: 'You receive the final approved certificates and documents.' }
    ],
  },
  {
    id: 'iec',
    title: 'Import Export Code (IEC) Registration',
    description: 'Comprehensive IEC registration services to simplify international trade compliance for your import-export business.',
    icon: Globe,
    image: iecImg,
    detailedDescription: `
<p>Our company offers comprehensive Import Export Code (IEC) registration services, catering to individuals and businesses engaged in import-export activities. Obtaining an IEC is a mandatory requirement for conducting international trade, and our services are designed to simplify the registration process and ensure compliance with applicable laws and regulations.</p>
<h3>Our IEC registration services include:</h3>
<div class="group bg-slate-50/50 dark:bg-slate-800/40 px-4 py-5 sm:px-6 md:px-8 md:py-6 rounded-3xl md:rounded-[2rem] mb-8 md:mb-10 mt-6 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-2xl hover:border-brand-teal/30 dark:hover:border-brand-teal/30 transition-all duration-500 hover:-translate-y-1">
  <h4 class="!mt-0 text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
    <div class="w-1.5 h-5 md:h-6 bg-brand-teal rounded-full"></div>
    Consultation and Guidance:
  </h4>
  <ul class="space-y-4 md:space-y-6">

  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Initial Consultation:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">We provide an initial consultation to understand your import-export requirements and determine the need for an IEC. Our team offers expert advice on the benefits, eligibility criteria, and documentation requirements for IEC registration.</span>
  </div>
</li>
  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Regulatory Compliance:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">We guide you through the legal and regulatory aspects associated with international trade, including customs procedures, export-import policy, and relevant government notifications. Our team ensures that your business activities align with the applicable laws and regulations.</span>
  </div>
</li>

  </ul>
</div>
<div class="group bg-slate-50/50 dark:bg-slate-800/40 px-4 py-5 sm:px-6 md:px-8 md:py-6 rounded-3xl md:rounded-[2rem] mb-8 md:mb-10 mt-6 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-2xl hover:border-brand-teal/30 dark:hover:border-brand-teal/30 transition-all duration-500 hover:-translate-y-1">
  <h4 class="!mt-0 text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
    <div class="w-1.5 h-5 md:h-6 bg-brand-teal rounded-full"></div>
    Documentation and Application:
  </h4>
  <ul class="space-y-4 md:space-y-6">

  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Document Preparation:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">Our team assists you in preparing the necessary documents required for IEC registration, such as identity proofs, address proofs, bank account details, and other supporting documents as specified by the authorities.</span>
  </div>
</li>
  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Application Submission:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">We handle the submission of your IEC application to the Directorate General of Foreign Trade (DGFT) or the relevant authority in your jurisdiction. Our team ensures that the application is accurately completed and submitted with all the required documents.</span>
  </div>
</li>
  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Follow-up and Approval:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">We follow up with the authorities on the status of your IEC application, addressing any queries or additional requirements to expedite the approval process. We keep you informed about the progress and ensure a prompt issuance of the IEC.</span>
  </div>
</li>

  </ul>
</div>
<div class="group bg-slate-50/50 dark:bg-slate-800/40 px-4 py-5 sm:px-6 md:px-8 md:py-6 rounded-3xl md:rounded-[2rem] mb-8 md:mb-10 mt-6 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-2xl hover:border-brand-teal/30 dark:hover:border-brand-teal/30 transition-all duration-500 hover:-translate-y-1">
  <h4 class="!mt-0 text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
    <div class="w-1.5 h-5 md:h-6 bg-brand-teal rounded-full"></div>
    Post-Registration Support:
  </h4>
  <ul class="space-y-4 md:space-y-6">

  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">IEC Modification and Amendments:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">If any changes or amendments need to be made to your IEC registration, such as updating the business address or adding new products to your import-export portfolio, we assist you in making the necessary modifications and updating the registration records.</span>
  </div>
</li>
  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Compliance Assistance:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">We provide guidance on ongoing compliance obligations, such as filing periodic reports, maintaining records, and adhering to export-import procedures. Our team ensures that you remain compliant with the regulations governing international trade.</span>
  </div>
</li>

  </ul>
</div>
<div class="group bg-slate-50/50 dark:bg-slate-800/40 px-4 py-5 sm:px-6 md:px-8 md:py-6 rounded-3xl md:rounded-[2rem] mb-8 md:mb-10 mt-6 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-2xl hover:border-brand-teal/30 dark:hover:border-brand-teal/30 transition-all duration-500 hover:-translate-y-1">
  <h4 class="!mt-0 text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
    <div class="w-1.5 h-5 md:h-6 bg-brand-teal rounded-full"></div>
    Renewal and Closure:
  </h4>
  <ul class="space-y-4 md:space-y-6">

  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Renewal Reminders:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">We send timely reminders for the renewal of your IEC to ensure continuity in your import-export activities. Our team assists you in initiating the renewal process and ensures compliance with the renewal requirements within the specified timelines.</span>
  </div>
</li>
  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Closure and Surrender:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">If you decide to cease your import-export operations, we provide guidance on the necessary procedures and documentation required to close or surrender your IEC registration. Our team assists you in fulfilling the closure formalities and updating the relevant authorities.</span>
  </div>
</li>

  </ul>
</div>
<p>By availing our IEC registration services, you can navigate the complexities of international trade regulations and establish a strong foundation for your import-export business. Our experienced professionals ensure a smooth and efficient registration process, enabling you to expand your business globally while complying with the necessary legal requirements.</p>
`,
    features: [
      'Consultation on Import-Export Requirements',
      'Regulatory Compliance Guidance',
      'Document Preparation and Bank Details',
      'Application Submission to DGFT',
      'IEC Modification and Amendments',
      'Renewal Reminders and Closure'
    ],
    process: [
      { title: 'Initial Consultation', description: 'We discuss your requirements and understand your business goals.' },
      { title: 'Document Preparation', description: 'Our experts gather and prepare all necessary legal documents.' },
      { title: 'Filing & Processing', description: 'We submit the applications to the relevant government authorities.' },
      { title: 'Completion & Delivery', description: 'You receive the final approved certificates and documents.' }
    ],
  },
  {
    id: 'closure',
    title: 'Company/LLP Closure',
    description: 'Comprehensive services for the closure of companies and LLPs, ensuring a smooth, efficient, and legally compliant process.',
    icon: FileX,
    image: closureImg,
    detailedDescription: `
<p>Our company specialises in providing comprehensive services for the closure of companies and limited liability partnerships (LLPs). We understand that closing a business entity can be a complex and time-consuming process, requiring adherence to legal requirements and regulatory obligations. Our experienced team is here to guide you through every step of the closure process, ensuring a smooth and hassle-free experience.</p>
<div class="group bg-slate-50/50 dark:bg-slate-800/40 px-4 py-5 sm:px-6 md:px-8 md:py-6 rounded-3xl md:rounded-[2rem] mb-8 md:mb-10 mt-6 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-2xl hover:border-brand-teal/30 dark:hover:border-brand-teal/30 transition-all duration-500 hover:-translate-y-1">
  <h3 class="!mt-0 text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
    <div class="w-1.5 h-6 md:h-8 bg-brand-teal rounded-full"></div>
    Our services include:
  </h3>
  <ul class="space-y-4 md:space-y-6">

  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Consultation:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">We offer initial consultations to understand your specific requirements and provide expert advice on the closure process. Our team will assess your company/LLP's current status, identify any potential legal obligations, and recommend the most appropriate closure strategy.</span>
  </div>
</li>
  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Documentation:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">We assist you in preparing all the necessary documentation required for the closure process. This includes drafting and filing the necessary forms, resolutions, affidavits, and declarations as per the relevant laws and regulations.</span>
  </div>
</li>
  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Compliance:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">We ensure that all legal and regulatory compliance obligations are met during the closure process. This includes settling outstanding liabilities, filing pending tax returns, obtaining necessary clearances from government authorities, and addressing any legal disputes or pending litigation.</span>
  </div>
</li>
  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Communication with Authorities:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">We act as a liaison between your company/LLP and the relevant authorities, such as the Registrar of Companies (ROC) or the Ministry of Corporate Affairs (MCA). We handle all correspondence, submissions, and inquiries on your behalf, ensuring timely and accurate communication throughout the closure process.</span>
  </div>
</li>
  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Asset Liquidation:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">If required, we can assist you in liquidating the assets of your company/LLP. We help in valuing and disposing of assets, settling creditors' claims, and distributing the remaining proceeds as per the legal requirements.</span>
  </div>
</li>
  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Employee Settlement:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">We support you in the proper settlement of employee-related matters, including providing guidance on redundancy procedures, calculating and disbursing final settlements, and complying with labour laws.</span>
  </div>
</li>
  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Closure Certificate:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">Upon successful completion of the closure process, we assist you in obtaining the necessary closure certificates from the authorities, confirming the legal dissolution of your company/LLP.</span>
  </div>
</li>
  <li class="flex gap-3 md:gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-brand-teal/20 dark:group-hover:border-brand-teal/20">
  <div class="flex-shrink-0 mt-1.5">
    <div class="w-2.5 h-2.5 bg-brand-teal rounded-full"></div>
  </div>
  <div>
    <strong class="text-slate-900 dark:text-white block mb-1.5 md:mb-2 text-base md:text-lg">Post-Closure Support:</strong>
    <span class="text-slate-600 dark:text-slate-300 leading-relaxed block text-sm md:text-base">Even after the closure is finalised, we continue to provide support and guidance. We can help with the closure of bank accounts, cancellation of registrations, and any other post-closure requirements that may arise.</span>
  </div>
</li>

  </ul>
</div>
<p>Our aim is to make the company/LLP closure process as smooth, efficient, and legally compliant as possible. By engaging our services, you can focus on other important aspects of your business or personal ventures, knowing that your closure process is in capable hands.</p>
<p>Please note that the specific services provided may vary depending on the jurisdiction and the unique requirements of your company/LLP closure. We recommend reaching out to us for a personalised consultation to discuss your specific needs.</p>
`,
    features: [
      'Consultation and Closure Strategy',
      'Documentation, Forms, and Resolutions',
      'Compliance and Liability Settlement',
      'Communication with Authorities (ROC/MCA)',
      'Asset Liquidation and Employee Settlement',
      'Obtaining Closure Certificate'
    ],
    process: [
      { title: 'Initial Consultation', description: 'We discuss your requirements and understand your business goals.' },
      { title: 'Document Preparation', description: 'Our experts gather and prepare all necessary legal documents.' },
      { title: 'Filing & Processing', description: 'We submit the applications to the relevant government authorities.' },
      { title: 'Completion & Delivery', description: 'You receive the final approved certificates and documents.' }
    ],
  }
];
