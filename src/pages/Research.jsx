import React from 'react'
import { assets } from '../assets/frontend/assets'

const Research = () => {
    return (
        <div className='bg-[#f4f8f9] py-10'>
            <h1 className="text-[#021b67] font-bold text-3xl text-center md:text-4xl">
                Research
            </h1>
            <div id="" className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-10 py-20  items-center">
                {/* Left Section */}
                <div className="relative flex justify-center items-center">
                    {/* Image */}
                    <img
                        src={assets.researchimg}
                        className="w-full max-w-md  object-cover rounded-md"
                        alt="Doctor"
                    />

                </div>

                {/* Right Section */}
                <div className="space-y-6 text-center md:text-left">

                    <div className="space-y-3">
                        <p className="text-gray-700 text-justify md:w-[75%] leading-6 ">
                            A trusted, patient focused and experienced locum homeopathic doctor with a long history of  serving patients by successfully diagnosing, treating and also managing their illnesses and diseases. She has been a team player, able to get along with other healthcare professionals and also research professionals.

                        </p>
                    </div>
                    {/* <div>
                      <h3 className="text-lg font-bold text-[#021b67]">What we do?</h3>
                      <p className="text-gray-700">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
                        sed quas at nulla, placeat error eaque, fugiat ad veniam
                        perspiciatis, voluptas in maxime repellendus facere. Iusto nulla ab
                        mollitia velit consequuntur vel voluptatibus facilis perspiciatis.
                      </p>
                    </div> */}

                </div>
            </div>

            <div id="" className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-10 py-20 bg-[#f4f8f9] items-center ">
                {/* Left Section */}


                {/* Right Section */}
                <div className="space-y-6 text-center   justify-items-end ">
                    <h1 className="text-[#021b67] text-center  font-bold text-3xl w-full md:text-4xl">
                        Research Projects
                    </h1>
                    <div className="space-y-3 md:justify-items-end">
                        <ul className="text-gray-700  md:text-left font-semibold md:list-disc space-y-2">
                            <li>
                                <strong>GYANSANJEEVANI (INDIA)</strong> <br />
                                (March 2022 - Ongoing)
                            </li>
                            <li>
                                <strong>PREVENTION AND ACTION THROUGH HOMEOPATHY (PATH) PROJECT</strong> <br />
                                (June 2015 - Ongoing)
                            </li>
                            <li>
                                <strong>UK INDIA RESEARCH INITIATIVE</strong> <br />
                                (July 2021 - Ongoing)
                            </li>
                            <li>
                                <strong>STOP TB PARTNERSHIP</strong> <br />
                                (June 2005 - Ongoing)
                            </li>
                        </ul>
                    </div>
                    {/* <div>
                      <h3 className="text-lg font-bold text-[#021b67]">What we do?</h3>
                      <p className="text-gray-700">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
                        sed quas at nulla, placeat error eaque, fugiat ad veniam
                        perspiciatis, voluptas in maxime repellendus facere. Iusto nulla ab
                        mollitia velit consequuntur vel voluptatibus facilis perspiciatis.
                      </p>
                    </div> */}

                </div>

                <div className="relative flex justify-center items-center">
                    {/* Image */}
                    <img
                        src={assets.approachimg}
                        className="w-full max-w-md md:max-w-md object-cover rounded-md"
                        alt="Doctor"
                    />

                </div>
            </div>

            <h1 className="text-[#021b67] font-bold text-3xl my-10 text-center md:text-4xl">
                Publications
            </h1>
            <ul className="text-gray-700  text-justify font-semibold md:mx-[20%] mx-[10%] list-decimal space-y-2 flex flex-col items-center">
                <li>Sharma N, Sharma RG, Sharma, Sharma S (2007).
                    <a className='underline' href="https://www.ncbi.nlm.nih.gov/pubmed/17590920" target="_blank" rel="noreferrer noopener">
                        Research trial of homeopathy as complementary with DOTS in treatment of relapsed TB
                    </a>. Abstracts from the International Congress on Complementary Medicine Research: May 11-13, Munich, Germany. Forsch Komplementmed. 2007 Apr; 14 Suppl 1: vii-viii, 1-53.
                </li>
                <li>Sharma N, Sharma RG, Sharma S, Chand K (2007). An Adjuvant To Chemotherapy Improves Clinical Outcome In Relapsed Pulmonary Tuberculosis. At the International Union Against Tuberculosis & Lung Disease, held in Kula Lumpur, Malaysia, August 4. International Union Against TB & Lung Disease - Eastern Region Conference.</li>
                <li>Sharma N, Sharma S, Sharma A (2010). Treating renal calculi of size 5-13mm with homoeopathy: A Retrospective study. At the 19th Wonca World Conference of Family Doctors; held in Cancun, Mexico: May 19-23. Wonca Conference Proceedings.</li>
                <li>Sharma N, Sharma S, Sharma A (2010). A randomized, double-blind Placebo controlled crossover trial of Homoeopathy in patients with chronic non-malignant pain. At the 19th Wonca World Conference of Family Doctors; held in Cancun, Mexico: May 19-23. Wonca Proceedings.</li>
                <li>        Sharma N, Sharma S, Rajendra A (2010). 
        <a className='underline' href="https://link.springer.com/article/10.1016/j.dza.2010.08.008" target="_blank" rel="noreferrer noopener">
            Efficacy of homoeopathy in the treatment of pedunculated warts of head and neck
        </a>. At the International congress of complementary medicine research (ICCMR), held in Tromso, Norway: May 19-21. ICCMR (International Congress on Complementary Medicine Research) 2010. Deutsche Zeitschrift für Akupunktur, October 2010, Volume 53, Issue 4, pp 81–82.
</li>
                <li>Sharma N, Sharma S, Sharma A (2010). Effect of ultramolecular Homeopathic medicines for Prevention of pediatric heatstroke Medicine; In proceedings of the 13th ICEM (International Conference on Emergency Medicine). Singapore, June 9-12.</li>
                <li>Sharma N, Sharma S, Shekhawat U (2010). Efficacy of homoeopathy in treatment of iron deficiency anemia. In: Proceedings of the 3rd European Congress for Integrative Medicine (ECIM), Berlin, December 3-4 December. European Society of Integrative Medicine.</li>
                <li>Sharma N, Sharma RG, Sharma S (2011). Effects of adjuvant homeopathic treatment in Multi drug resistance tuberculosis: a pilot study. In: Proceedings of the European Congress of Homeopathy. Riga, Latvia, 18–21 May.</li>
                <li>Sharma N, Sharma RG, Sharma S (2011). A randomized placebo-controlled trial of the efficacy of homoeopathy as adjutant in the treatment of pulmonary tuberculosis. In: Proceedings of the 42nd World Conference on Lung Health. Lille, France, October 26-30 October. International Union Against Tuberculosis and Lung Disease.</li>
                <li>Sharma S, Sharma N, Sharma CM (2012). A randomized, double-blind, placebo controlled crossover trial of homeopathy in patients with chronic non malignant pain. Pain Practice; 12(Suppl 1):53.</li>
                <li>Sharma N, Sharma RG (2012). Homeopathy improves lung functions and quality of life in patients with COPD: a single blind, randomized controlled trial. In: Proceedings of the 19th Wonca Asia Pacific Regional Conference. Jeju, Korea, May 24-27. World Organization of Family Doctors.</li>
                <li>Sharma N, Sharma RG (2012). Randomised phase II trial of homeopathy to prevent post treatment impairment of pulmonary tuberculosis. In: Proceedings of the 6th IPCRG World Conference, Edinburgh, UK, April 25-28; IPCRG; pg 47-48.</li>
                <li>Sharma N, Sharma S (2012). Using homeopathy for treatment of PTSD and depression in child laborers. In: Proceedings of the International Society for Affective Disorders Congress. London, UK, April 18 - 20. International Society for Affective Disorders (ISAD).</li>
                <li>Sharma S, Sharma N (2012). Long term evaluation of homeopathy on post treatment impairment of pulmonary tuberculosis. BMC Complementary and Alternative Medicine; 12 (Suppl 1): P223.</li>
                <li>Sharma S, Sharma N, Sharma R (2012). Accelerating the healing of bone fracture using homeopathy: a prospective, randomized double-blind controlled study. BMC Complementary and Alternative Medicine; 12(Suppl 1):O61.</li>
                <li>Sharma N, Sharma S, Shekhawat U (2012). Effect of homeopathy in women with heavy menstrual bleeding. Special Issue: Abstracts of the RCOG 10th International Scientific Congress 2012, 5‐8 June 2012, Kuching, Sarawak, Malaysia. BJOG; 119 (Suppl s1): 195–196.</li>
                <li>Sharma N, Sharma S, Sharma S (2013). Individualized homeopathy as an adjuvant in treatment for hypertension in older adults: Results from randomized double blind placebo controlled trial. 8th Annual International Congress of Complementary Medicine Research, ICCMR 2013. London, 11-13 April, 2013. Forsch Komplementmed 2013;20(Suppl 1):1-124.</li>
                <li>Sharma N, Sharma S, Sharma RG (2013). Homeopathy as an add-on therapy in patients with resistant hypertension. In: proceedings of the International Research Congress on Integrative Medicine and Health (IRCIMH), Florida, USA, May 13-16. International Society for Complementary Medicine Research (ISCMR).</li>
                <li>Sharma N, Ameta A, Sharma S (2013). Effect of homeopathy on chronic tension-type headache: a pragmatic, randomised controlled single blind trial. Journal of Headache and Pain; 14(Suppl 1): P56. Published online 2013 Feb 21.</li>
                <li>Sharma N, Sharma S, Sharma RG (2015). Randomized controlled trial of homeopathy compared with treatment as usual for insomnia in patients with cancer. In the International Conference on Hospice & Palliative Care, Orlando, USA, August 31-September 02. Journal of Palliative Care & Medicine.</li>
                <li>Sharma N, Sharma S, Sharma RG (2016). Effects of homeopathy treatment in reducing symptom distress among breast cancer patients: A randomized controlled trial. In: Proceedings of the International Cancer Study & Therapy Conference, Baltimore, USA, April 4-6.</li>
                <li>Sharma N, Sharma RG, Sharma S (2016). Randomized placebo controlled study of homeopathy supplementation in pulmonary tuberculosis: Effect on treatment outcome. Conference abstracts from the 9th European Congress for Integrative Medicine, Budapest, Hungary, September 09-11. European Journal of Integrative Medicine 8S (2016) I–iii.</li>
                <li>Sharma N, Sharma S, Sharma RG (2016). Homeopathy treatment of chemotherapy-induced nausea and vomiting in Breast cancer patients: a randomized controlled trial. Conference abstracts of the 2nd World Congress Breast Cancer, Phoenix, USA, September 19-21. Cancer Sci Ther 2016, 8:8(Suppl); pg 105.</li>
                <li>Sharma N, Sharma S, Sharma RG (2016). Effect of homeopathy on fatigue, anxiety and depression during chemotherapy for breast cancer. In: Proceedings of the 14th World Cancer Conference, Dubai, UAE, November 21-23.</li>
                <li>Sharma N, Sharma S, Sharma RG (2016). Homeopathy for the prevention of radiation dermatitis in patients with breast cancer: Randomized placebo controlled trial. Conference abstract of the 3rd World Congress on Women's Health and Breast Cancer; London, UK, October 3-5. Journal of Cancer Science Therapy 2016, 8:10(Suppl).</li>
                <li>Sharma N, Sharma S, Sharma RG (2016). Randomized controlled Trial of Homeopathy for Panic Disorder. Conference abstracts of the 13th International Conference on Psychiatric-Mental Health Nursing, London, UK, October 03-04.</li>
                <li>Sharma N, Sharma S, Sharma RG (2017). The effect of Individualized homeopathy on Cesarean post-operative pain: randomized controlled trial. In: proceedings of the 1st World congress on Maternal Fetal Neonatal Medicine, London, UK, April 24-26.</li>
                <li>Sharma N, Sharma S, Sharma RG (2017). Using homeopathy to treat sore nipples in breastfeeding women: Randomized single blind controlled trial. In: proceedings of the 1st world congress on maternal fetal neonatal medicine, London, UK, April 24-26.</li>
                <li>Sharma N, Sharma S, Sharma RG (2017). Effect of homeopathy on sleep quality and fatigue in postpartum women: Randomized controlled trial. In: proceedings of the 25th Anniversary Congress on Women's Health, Washington DC, USA, April 28-30. Academy of Women's Health.</li>
                <li>Sharma N, Sharma S, Sharma RG (2017). Homeopathy for the Treatment of Posttraumatic Stress Disorder: A Randomized, Double-Blind, Controlled Trial. In: proceedings of the International Conference on Trauma and Mental Health, Jerusalem, Israel, May 21-23. European Society of Traumatic Stress Studies.</li>
                <li>Sharma N, Sharma S, Sharma RG (2017). Effect of Homeopathy on Postpartum Depression, Fatigue and Quality of life. 2nd International Conference on Reproductive Health; San Antonio, USA, December 1-2. Published in official journal: Reproductive system & sexual disorders: Current research.</li>
                <li>Sharma N, Sharma S, Sharma RG (2017). Effect of Homeopathy on pain, anxiety and self-efficacy during childbirth: Randomized controlled trial. In the 3rd World Congress on Midwifery and Women’s Health, London, UK, October 02-04. Journal of Womens Health, Issues Care.</li>
                <li>Sharma N, Sharma S, Sharma RG (2017). The effects of individualized homeopathy in Patients with Chronic Musculoskeletal Pain: A Randomized Clinical Trial. Journal of Pain Relief, 6:5(Suppl) pg 63.</li>
                <li>Sharma N, Sharma S, Sharma RG (2018). Individualized Homeopathy Treatment for children with generalized anxiety disorders: A randomized wait-list controlled trial. In the 47th Global Nursing & Healthcare Conference, London, UK, March 1-3. Journal of Nursing Care 2018, Volume 7: pg 87.</li>
                <li>Sharma N, Sharma S, Sharma RG (2017). Homeopathy for Post-traumatic stress disorder in battered women: Results from Randomized controlled trial. In: proceedings of the International Congress on Integrative Medicine & Health, Baltimore, USA, May 8-10. Academic Consortium for Integrative Medicine & Health.</li>
                <li>Sharma N, Sharma S, Sharma RG (2018). The Effect of homeopathy on Sleep among Elderly: A Randomized Placebo Controlled Clinical Trial. In: proceedings of the 8th International Conference on, Geriatrics Gerontology & Palliative Nursing, Barcelona, Spain, July 30-31.</li>
                <li>Sharma N, Sharma RG, Sharma S (2018). Homeopathy treatment for functional abdominal pain in children: Randomised placebo-controlled trial. Journal of Pediatric Care 2018, Volume 4, pg 49.</li>
            </ul>

        </div>



    )
}

export default Research