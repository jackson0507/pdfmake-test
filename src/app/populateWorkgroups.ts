import { WorkGroup } from './workgroups.model';

/* WORKGROUP SQL

select wg.id, i.acronym 'interestCategoy', wg.area, wg.group, wg.prefix, wg.name, wg.description, wg.aptitude_text, wg.cut_text
from workgroups as wg
inner join interests as i
on wg.interest_id = i.id

*/

/* CUT SCORE SQL

select wgc.workgroup_id, a.acronym, wgc.score
from workgroup_cuts wgc
inner join aptitudes a
on wgc.aptitude_id = a.id
where wgc.score <> 0

*/

/* JOBS SQL
SELECT workgroup_id, name, dotnum, m, l, svp, wgcheck
FROM workgroup_jobs
*/

export const workgroups: WorkGroup[] =
    [
        {
            id: 1,
            interestCategory: 'Art',
            area: 1,
            group: 1,
            prefix: '01.01',
            name: 'Literary Arts',
            description: 'Workers in this group write, edit, or direct the publication of prose or poetry.',
            aptitude_text: 'QUALIFIED W/SEM',
            cutText: 'G100, V100, Q100'
            , aptitudeMinimums: [], jobs: []
        },
        {
            id: 2,
            interestCategory: 'Art',
            area: 1,
            group: 2,
            prefix: '01.02',
            name: 'Visual Arts',
            description: 'Workers in this group create original works of art or do commercial artwork, using such techniques as drawing, painting, photography, and sculpture to express or interpret ideas or to illustrate various written materials. Some visual artists design products, settings, or graphics (such as advertising or book covers), and oversee the work of other artists or craftsmen who produce or install it. Others teach art, or appraise or restore paintings and other fine art objects. ',
            aptitude_text: null,
            cutText: 'G100, S100, P85'
            , aptitudeMinimums: [], jobs: []
        },
        {
            id: 3,
            interestCategory: 'Art',
            area: 1,
            group: 3,
            prefix: '01.03',
            name: 'Performing Arts: Drama',
            description: 'Workers in this group produce, direct and perform in dramatic productions and similar forms of entertainment. They also teach acting, choose performers for particular roles or perform other \'behind-the-scenes\' work to make productions run smoothly.   ',
            aptitude_text: 'QUALIFIED W/SEM',
            cutText: 'G100, V100'
            , aptitudeMinimums: [], jobs: []
        },
        {
            id: 4,
            interestCategory: 'Art',
            area: 1,
            group: 4,
            prefix: '01.04',
            name: 'Performing Arts: Music',
            description: 'Workers in this group sing or play instruments, teach, or direct vocal or instrumental music. They compose, arrange or orchestrate musical compositions and plan the presentation of concerts.                                                              ',
            aptitude_text: null,
            cutText: 'G110, V100, Q100'
            , aptitudeMinimums: [], jobs: []
        },
        {
            id: 5,
            interestCategory: 'Art',
            area: 1,
            group: 5,
            prefix: '01.05',
            name: 'Performing Arts: Dance',
            description: 'Workers in this group compose, perform, or teach dance routines or techniques.                                                                                                                                                                                ',
            aptitude_text: null,
            cutText: 'G100, S95'
            , aptitudeMinimums: [], jobs: []
        },
        {
            id: 6,
            interestCategory: 'Art',
            area: 1,
            group: 6,
            prefix: '01.06',
            name: 'Craft Arts',
            description: 'Workers in this group apply artistic techniques, fabricate, decorate or repair a variety of products, and reproduce photographs and graphic or printed materials. They use engraving and etching precision equipment, knives and chisels, paint brushes and power tools to work wood, stone, clay, metal and gemstones or embellish objects made from all of these materials. ',
            aptitude_text: 'QUALIFIED W/SEM',
            cutText: 'S90, P85, M85'
            , aptitudeMinimums: [], jobs: []
        },
        {
            id: 7,
            interestCategory: 'Sci',
            area: 2,
            group: 1,
            prefix: '02.01',
            name: 'Physical Sciences',
            description: 'Workers in this group are concerned mostly with non-living things, such as chemicals, rocks, metals, mathematics, movements of the earth and the stars, etc. They conduct scientific studies and perform other activities requiring a knowledge of math, physics or chemistry. Some workers investigate, discover and test new theories. Some look for ways to develop new or improved materials or processes for use in production and construction. Others do research in such fields as geology, astronomy, oceanography, and computer science. ',
            aptitude_text: null,
            cutText: 'G115, V105, N110, S110'
            , aptitudeMinimums: [], jobs: []
        },
        {
            id: 8,
            interestCategory: 'Sci',
            area: 2,
            group: 2,
            prefix: '02.02',
            name: 'Life Sciences',
            description: 'Workers in this group are concerned with living things, such as plants and animals. They conduct research and do experiments to expand man\'s knowledge of living things. Some may work on problems related to how the environment affects plant and animal life.  Others may study causes of disease and ways to control disease.',
            aptitude_text: null,
            cutText: 'G115, V105, N110, S110'
            , aptitudeMinimums: [], jobs: []
        },
        {
            id: 9,
            interestCategory: 'Sci',
            area: 2,
            group: 3,
            prefix: '02.03',
            name: 'Medical Sciences',
            description: 'Workers in this group are involved in the prevention, diagnosis and treatment of human and animal diseases, disorders or injuries.  It is common to specialize in specific types of illnesses, or special areas or organs of the body. Workers who prefer to be more general may become general practitioners, family practitioners or may learn to deal with groups of related medical problems.',
            aptitude_text: null,
            cutText: 'G115, V105, N110, S110'
            , aptitudeMinimums: [], jobs: []
        },
        {
            id: 10,
            interestCategory: 'Sci',
            area: 2,
            group: 4,
            prefix: '02.04',
            name: 'Laboratory Technology',
            description: 'Workers in this group use special laboratory techniques and equipment to perform tests in the fields of chemistry, biology or physics.  They record information that results from their experiments and tests. They help scientists, medical doctors, researchers and engineers in their work.',
            aptitude_text: 'QUALIFIED W/SEM',
            cutText: 'G105, N100'
            , aptitudeMinimums: [], jobs: []
        },
        {
            id: 11,
            interestCategory: 'Pla',
            area: 3,
            group: 1,
            prefix: '03.01',
            name: 'Mgr Work: Plants/Animals',
            description: 'Workers in this group operate or manage farming, fishing, forestry and horticultural service businesses of many kinds. Some of them breed specialty plants and animals. Others provide services to increase production or beautify land areas.               ',
            aptitude_text: 'QUALIFIED',
            cutText: 'G100, N90'
            , aptitudeMinimums: [], jobs: []
        },
        {
            id: 12,
            interestCategory: 'Pla',
            area: 3,
            group: 3,
            prefix: '03.03',
            name: 'Animal Training & Service',
            description: 'Workers in this group take care of animals of many kinds, and train them for a variety of purposes.                                                                                                                                                           ',
            aptitude_text: 'QUALIFIED',
            cutText: 'G95, K85, M85'
            , aptitudeMinimums: [], jobs: []
        },
        {
            id: 13,
            interestCategory: 'Pla',
            area: 3,
            group: 4,
            prefix: '03.04',
            name: 'Elem Work: Plants/Animals',
            description: 'Workers in this group perform active physical tasks, usually in an outdoor, non-industrial setting. They work with their hands, use various kinds of tools and equipment or operate machinery. ',
            aptitude_text: 'QUALIFIED',
            cutText: 'K85, M80'
            , aptitudeMinimums: [], jobs: []
        },
        {
            id: 14,
            interestCategory: 'Prt',
            area: 4,
            group: 1,
            prefix: '04.01',
            name: 'Safety & Law Enforcement',
            description: 'Workers in this group are in charge of enforcing laws and regulations.  Some investigate crimes, while others supervise workers who stop or arrest law-breakers. Others make inspections to ensure that laws are not broken.                             ',
            aptitude_text: 'QUALIFIED',
            cutText: 'G100, Q95'
            , aptitudeMinimums: [], jobs: []
        },
        {
            id: 15,
            interestCategory: 'Prt',
            area: 4,
            group: 2,
            prefix: '04.02',
            name: 'Security Services',
            description: 'Workers in this group protect people and animals from injury or danger. They enforce laws, investigate suspicious persons or acts, prevent crime and fight fires.                                                                                            ',
            aptitude_text: 'QUALIFIED',
            cutText: 'G95'
            , aptitudeMinimums: [], jobs: []
        },
        {
            id: 16,
            interestCategory: 'Mch',
            area: 5,
            group: 1,
            prefix: '05.01',
            name: 'Engineering',
            description: 'Workers in this group plan, design,and direct the construction or development of buildings, bridges, roads, airports, dams, sewage systems, air-conditioning systems, mining machinery, and other structures and equipment.                                  ',
            aptitude_text: null,
            cutText: 'G115, N105, S110'
            , aptitudeMinimums: [], jobs: []
        },
        {
            id: 17,
            interestCategory: 'Mch',
            area: 5,
            group: 2,
            prefix: '05.02',
            name: 'Mgr Work: Mechanical',
            description: 'Workers in this group manage industrial plants or systems where technical work is being performed.                                                                                                                                                            ',
            aptitude_text: null,
            cutText: 'G105, V100, N100, S95'
            , aptitudeMinimums: [], jobs: []
        },
        {
            id: 18,
            interestCategory: 'Mch',
            area: 5,
            group: 3,
            prefix: '05.03',
            name: 'Engineering Technology',
            description: 'Workers in this group collect, record and coordinate technical information in such activities as surveying, drafting, petroleum production, communications control and materials scheduling. ',
            aptitude_text: null,
            cutText: 'G105, N100, S100'
            , aptitudeMinimums: [], jobs: []
        },
        {
            id: 19,
            interestCategory: 'Mch',
            area: 5,
            group: 4,
            prefix: '05.04',
            name: 'Air/Water Vehicle Operation',
            description: 'Workers in this group pilot airplanes or ships, or supervise others who do. Some instruct other persons in flying.                                                                                                                                          ',
            aptitude_text: null,
            cutText: 'G105, N100, S100'
            , aptitudeMinimums: [], jobs: []
        },
        {
            id: 20,
            interestCategory: 'Mch',
            area: 5,
            group: 5,
            prefix: '05.05',
            name: 'Craft Technology',
            description: 'Workers in this group perform highly skilled hand and/or machine work requiring special techniques, training and experience.                                                                                                                                 ',
            aptitude_text: 'QUALIFIED W/SEM',
            cutText: 'S90, P85, M85'
            , aptitudeMinimums: [], jobs: []
        },
        {
            id: 21,
            interestCategory: 'Mch',
            area: 5,
            group: 7,
            prefix: '05.07',
            name: 'Quality Control',
            description: 'Workers in this group inspect and/or test materials and products to ensure that they meet standards.                                                                                                                                                              ',
            aptitude_text: 'QUALIFIED W/SEM',
            cutText: 'N90, S90, P85'
            , aptitudeMinimums: [], jobs: []
        },
        {
            id: 22,
            interestCategory: 'Mch',
            area: 5,
            group: 8,
            prefix: '05.08',
            name: 'Land/Motor Vehicle Operation',
            description: 'Workers in this group drive large or small trucks, delivery vans or locomotives to move materials or deliver products. Some drive ambulances; others operate small boats.                                                                                   ',
            aptitude_text: 'QUALIFIED W/SEM',
            cutText: 'S85, P80, M85'
            , aptitudeMinimums: [], jobs: []
        },
        {
            id: 23,
            interestCategory: 'Mch',
            area: 5,
            group: 9,
            prefix: '05.09',
            name: 'Materials Control',
            description: 'Workers in this group receive, store, and/or ship materials and products. Some estimate and order the quantities and kinds of materials needed. Others regulate and control the flow of materials to places in the plant where they are to be used. Most have to keep records.',
            aptitude_text: 'QUALIFIED',
            cutText: 'G95, N85, Q90, K85'
            , aptitudeMinimums: [], jobs: []
        },
        {
            id: 24,
            interestCategory: 'Mch',
            area: 5,
            group: 10,
            prefix: '05.10',
            name: 'Crafts',
            description: 'Workers in this group use their hands and hand tools skillfully to fabricate, process, install and/or repair materials, products and/or structural parts. They follow established procedures and techniques.',
            aptitude_text: 'QUALIFIED W/SEM',
            cutText: 'S85, P80, K85, M85'
            , aptitudeMinimums: [], jobs: []
        },
        {
            id: 25,
            interestCategory: 'Mch',
            area: 5,
            group: 11,
            prefix: '05.11',
            name: 'Equipment Operation',
            description: 'Workers in this group operate heavy machines and equipment to dig, drill, dredge, hoist or move substances and materials. They also operate machines to pave roads. ',
            aptitude_text: 'QUALIFIED W/SEM',
            cutText: 'S85, P80, M85'
            , aptitudeMinimums: [], jobs: []
        },
        {
            id: 26,
            interestCategory: 'Mch',
            area: 5,
            group: 12,
            prefix: '05.12',
            name: 'Elemental Work: Mechanical',
            description: 'Workers in this group perform a variety of unskilled tasks, such as moving materials, cleaning work areas, operating simple machines or helping skilled workers. ',
            aptitude_text: 'QUALIFIED',
            cutText: 'K85, M80'
            , aptitudeMinimums: [], jobs: []
        },
        {
            id: 27,
            interestCategory: 'Ind',
            area: 6,
            group: 1,
            prefix: '06.01',
            name: 'Production Technology',
            description: 'Workers in this group use their skill and knowledge of machines and processes to perform one or more demanding or complex activities.  Some set up machines for others to operate or set up and perform a variety of machine operations on their own. Some do precision handwork. ',
            aptitude_text: 'QUALIFIED W/SEM',
            cutText: 'N85, S90, P85, M85'
            , aptitudeMinimums: [], jobs: []
        },
        {
            id: 28,
            interestCategory: 'Ind',
            area: 6,
            group: 2,
            prefix: '06.02',
            name: 'Production Work',
            description: 'Workers in this group perform skilled hand and/or machine work to make products in a factory setting.                                                                                                                                                         ',
            aptitude_text: 'QUALIFIED',
            cutText: 'P80, K85, M85'
            , aptitudeMinimums: [], jobs: []
        },
        {
            id: 29,
            interestCategory: 'Ind',
            area: 6,
            group: 3,
            prefix: '06.03',
            name: 'Quality Control',
            description: 'Workers in this group check the quality of products and materials being manufactured. They inspect, test, weigh, sort and grade specific items to be sure that they meet certain standards. Some may also keep inspection records of the number or kind of defects and flaws they find. ',
            aptitude_text: 'QUALIFIED',
            cutText: 'P80, K85, M85'
            , aptitudeMinimums: [], jobs: []
        },
        {
            id: 30,
            interestCategory: 'Ind',
            area: 6,
            group: 4,
            prefix: '06.04',
            name: 'Elemental Work: Industrial',
            description: 'Workers in this group feed, off bear, or tend machines and equipment, or do manual work. They perform routine, uncomplicated work that requires little training or experience. They also assist other, more skilled workers.                                  ',
            aptitude_text: 'QUALIFIED',
            cutText: 'K85, F80, M80'
            , aptitudeMinimums: [], jobs: []
        },
        {
            id: 31,
            interestCategory: 'Bus',
            area: 7,
            group: 1,
            prefix: '07.01',
            name: 'Administrative Detail',
            description: 'Workers in this group perform clerical work which requires special skills and knowledge. They perform management activities according to established regulations and procedures.                                                                              ',
            aptitude_text: 'QUALIFIED',
            cutText: 'G100, N95, Q100'
            , aptitudeMinimums: [], jobs: []
        },
        {
            id: 32,
            interestCategory: 'Bus',
            area: 7,
            group: 2,
            prefix: '07.02',
            name: 'Mathematical Detail',
            description: 'Workers in this group use clerical and math skills to gather, organize, compute and record, with or without machines, the numerical information used in business or in financial transactions.                                                               ',
            aptitude_text: 'QUALIFIED',
            cutText: 'G95, N90, Q100'
            , aptitudeMinimums: [], jobs: []
        },
        {
            id: 33,
            interestCategory: 'Bus',
            area: 7,
            group: 3,
            prefix: '07.03',
            name: 'Financial Detail',
            description: 'Workers in this group use basic math skills as they deal with the public. Keeping records, answering customers\' questions, and supervising others is often part of the job.                                                                                   ',
            aptitude_text: 'QUALIFIED',
            cutText: 'G95, N90, Q100'
            , aptitudeMinimums: [], jobs: []
        },
        {
            id: 34,
            interestCategory: 'Bus',
            area: 7,
            group: 4,
            prefix: '07.04',
            name: 'Oral Communications',
            description: 'Workers in this group give and receive information verbally. Workers may deal with people in person, by telephone, telegraph or radio.  Recording of information in an organized way is frequently required.                                                 ',
            aptitude_text: 'QUALIFIED',
            cutText: 'G95, Q95'
            , aptitudeMinimums: [], jobs: []
        },
        {
            id: 35,
            interestCategory: 'Bus',
            area: 7,
            group: 5,
            prefix: '07.05',
            name: 'Records Processing',
            description: 'Workers in this group prepare, review, maintain, route, distribute and coordinate recorded information. They check records and schedules for accuracy. They may schedule the activities of people or the use of equipment.                                   ',
            aptitude_text: 'QUALIFIED',
            cutText: 'G95, Q95'
            , aptitudeMinimums: [], jobs: []
        },
        {
            id: 36,
            interestCategory: 'Bus',
            area: 7,
            group: 6,
            prefix: '07.06',
            name: 'Clerical Machine Operation',
            description: 'Workers in this group use business machines to record or process data. They operate machines that type, print, sort, compute, send or receive information.                                                                                                   ',
            aptitude_text: 'QUALIFIED',
            cutText: 'G95, Q100, K95'
            , aptitudeMinimums: [], jobs: []
        },
        {
            id: 37,
            interestCategory: 'Bus',
            area: 7,
            group: 7,
            prefix: '07.07',
            name: 'Clerical Handling',
            description: 'Workers in this group perform clerical duties that require little special training or skill. Workers regularly file, sort, copy, route or deliver things like letters, packages or messages.',
            aptitude_text: 'QUALIFIED',
            cutText: 'Q90, K85'
            , aptitudeMinimums: [], jobs: []
        },
        {
            id: 38,
            interestCategory: 'Sel',
            area: 8,
            group: 1,
            prefix: '08.01',
            name: 'Sales Technology',
            description: 'Workers in this group sell products such as industrial machinery, data processing equipment and pharmaceuticals; services such as industrial shipping, insurance and advertising. They advise customers of the capabilities, uses and other important features of these products and services, and help them choose those best suited to their needs. ',
            aptitude_text: 'QUALIFIED W/SEM',
            cutText: 'G100, V100, N95, Q100'
            , aptitudeMinimums: [], jobs: []
        },
        {
            id: 39,
            interestCategory: 'Sel',
            area: 8,
            group: 2,
            prefix: '08.02',
            name: 'General Sales',
            description: 'Workers in this group sell, demonstrate and solicit orders for products and services of many kinds.                                                                                                                                                          ',
            aptitude_text: 'QUALIFIED',
            cutText: 'G95, N90, Q90'
            , aptitudeMinimums: [], jobs: []
        },
        {
            id: 40,
            interestCategory: 'Sel',
            area: 8,
            group: 3,
            prefix: '08.03',
            name: 'Vending',
            description: 'Workers in this group sell novelties, snacks and other inexpensive items.                                                                                                                                                                                     ',
            aptitude_text: 'QUALIFIED',
            cutText: 'K85, M80'
            , aptitudeMinimums: [], jobs: []
        },
        {
            id: 41,
            interestCategory: 'Acc',
            area: 9,
            group: 1,
            prefix: '09.01',
            name: 'Hospitality Services',
            description: 'Workers in this group help persons, such as visitors, travelers and customers, get acquainted with, and feel at ease in, an unfamiliar setting; provide escort and guide services; and plan and direct social activities. They may also be concerned with the safety and comfort of people when they are traveling or vacationing.',
            aptitude_text: 'QUALIFIED',
            cutText: 'G95'
            , aptitudeMinimums: [], jobs: []
        },
        {
            id: 42,
            interestCategory: 'Acc',
            area: 9,
            group: 2,
            prefix: '09.02',
            name: 'Barber & Beauty Services',
            description: 'Workers in this group provide people with a variety of barbering and beauty services. These services involve care of the hair, skin and nails.                                                                                                               ',
            aptitude_text: 'QUALIFIED W/SEM',
            cutText: 'S85, P85, K90, M85'
            , aptitudeMinimums: [], jobs: []
        },
        {
            id: 43,
            interestCategory: 'Acc',
            area: 9,
            group: 3,
            prefix: '09.03',
            name: 'Passenger Services',
            description: 'Workers in this group drive buses, taxis, limousines or other vehicles to transport people. Workers who teach driving are also included in this group.                                                                                                        ',
            aptitude_text: 'QUALIFIED W/SEM',
            cutText: 'S85, M85'
            , aptitudeMinimums: [], jobs: []
        },
        {
            id: 44,
            interestCategory: 'Acc',
            area: 9,
            group: 5,
            prefix: '09.05',
            name: 'Attendant Services',
            description: 'Workers in this group perform services that make life easier and more pleasant for people. They do things that people can\'t or don\'t want to do for themselves, like opening doors, delivering messages, carrying luggage and packages, and serving food.  ',
            aptitude_text: 'QUALIFIED',
            cutText: 'K85, M80'
            , aptitudeMinimums: [], jobs: []
        },
        {
            id: 45,
            interestCategory: 'Hum',
            area: 10,
            group: 1,
            prefix: '10.01',
            name: 'Social Services',
            description: 'Workers in this group help people deal with their problems. They may work with one person at a time or with groups of people. Workers sometimes specialize in problems that are personal, social, vocational, physical, educational or spiritual in nature.  ',
            aptitude_text: 'QUALIFIED W/SEM',
            cutText: 'G105, V100, N100, Q95'
            , aptitudeMinimums: [], jobs: []
        },
        {
            id: 46,
            interestCategory: 'Hum',
            area: 10,
            group: 2,
            prefix: '10.02',
            name: 'Nursing, Therapy & Specialized',
            description: 'Workers in this group care for, treat or train people to improve their physical and emotional well-being. Most workers in this group deal with sick, injured or handicapped people. Some workers are involved in health education and sickness prevention.  ',
            aptitude_text: 'QUALIFIED W/SEM',
            cutText: 'G105, V100'
            , aptitudeMinimums: [], jobs: []
        },
        {
            id: 47,
            interestCategory: 'Hum',
            area: 10,
            group: 3,
            prefix: '10.03',
            name: 'Child & Adult Care',
            description: 'Workers in this group are concerned with physical needs and the welfare of others. They assist professionals in treating the sick or injured. They care for the elderly, very young or the handicapped.  Frequently, these workers help people do the things they cannot do for themselves.',
            aptitude_text: 'QUALIFIED',
            cutText: 'G95'
            , aptitudeMinimums: [], jobs: []
        },
        {
            id: 48,
            interestCategory: 'Ldi',
            area: 11,
            group: 1,
            prefix: '11.01',
            name: 'Mathematics & Statistics',
            description: 'Workers in this group use advanced math and statistics to solve problems and conduct research. They analyze and interpret numerical data for planning and decision making. Some of these workers may first study and then determine how computers may best be used to solve problems or process information.',
            aptitude_text: null,
            cutText: 'G115, V100, N110, S100'
            , aptitudeMinimums: [], jobs: []
        },
        {
            id: 49,
            interestCategory: 'Ldi',
            area: 11,
            group: 2,
            prefix: '11.02',
            name: 'Educational & Library Svcs',
            description: 'Workers in this group do general and specialized teaching, vocational training, advising in agriculture and home economics, and library work of various kinds.                                                                                                ',
            aptitude_text: 'QUALIFIED W/SEM',
            cutText: 'G100, V100, N95, Q100'
            , aptitudeMinimums: [], jobs: []
        },
        {
            id: 50,
            interestCategory: 'Ldi',
            area: 11,
            group: 3,
            prefix: '11.03',
            name: 'Social Research',
            description: 'Workers in this group gather, study and analyze information about individuals, specific groups or entire societies. They conduct research, both historical and current, into all aspects of human behavior, including abnormal behavior, language, work, politics, lifestyle and cultural expression. ',
            aptitude_text: null,
            cutText: 'G110, V100, N105, Q100'
            , aptitudeMinimums: [], jobs: []
        },
        {
            id: 51,
            interestCategory: 'Ldi',
            area: 11,
            group: 4,
            prefix: '11.04',
            name: 'Law',
            description: 'Workers in this group advise and represent others in legal matters.  Those in small towns and cities conduct criminal or civil cases in court, draw up wills and other legal papers, abstract real estate, and perform related activities. Those in large cities usually specialize in one kind of law, such as criminal, civil, tax, labor or patent.',
            aptitude_text: null,
            cutText: 'G110, V100, N105, Q100'
            , aptitudeMinimums: [], jobs: []
        },
        {
            id: 52,
            interestCategory: 'Ldi',
            area: 11,
            group: 5,
            prefix: '11.05',
            name: 'Business Administration',
            description: 'Workers in this group are top level administrators and managers who work through lower level supervisors to direct all or part of the activities in private establishments or government agencies.  They set policies, make important decisions and set priorities.',
            aptitude_text: 'QUALIFIED W/SEM',
            cutText: 'G105, V95, N100, Q100'
            , aptitudeMinimums: [], jobs: []
        },
        {
            id: 53,
            interestCategory: 'Ldi',
            area: 11,
            group: 6,
            prefix: '11.06',
            name: 'Finance',
            description: 'Workers in this group use mathematical and analytical skills to design financial systems and examine and interpret financial records.  They are concerned with accounting and auditing activities, records systems analysis, risk and profit analyses, brokering, and budget and financial control.',
            aptitude_text: null,
            cutText: 'G110, V95, N105, Q100'
            , aptitudeMinimums: [], jobs: []
        },
        {
            id: 54,
            interestCategory: 'Ldi',
            area: 11,
            group: 7,
            prefix: '11.07',
            name: 'Services Administration',
            description: 'Workers in this group manage programs and projects in agencies that provide people with services in such areas as health, education, welfare and recreation. They are in charge of program planning, policy making and other managerial activities.         ',
            aptitude_text: 'QUALIFIED W/SEM',
            cutText: 'G105, V95, N100, Q100'
            , aptitudeMinimums: [], jobs: []
        },
        {
            id: 55,
            interestCategory: 'Ldi',
            area: 11,
            group: 8,
            prefix: '11.08',
            name: 'Communications',
            description: 'Workers in this group write, edit, report and translate factual information. They find employment with radio and television broadcasting stations, newspapers and publishing firms.                                                                          ',
            aptitude_text: 'QUALIFIED W/SEM',
            cutText: 'G100, V100, N95, Q100'
            , aptitudeMinimums: [], jobs: []
        },
        {
            id: 56,
            interestCategory: 'Ldi',
            area: 11,
            group: 9,
            prefix: '11.09',
            name: 'Promotion',
            description: 'Workers in this group raise money, advertise products and services, and influence people in their actions or thoughts.                                                                                                                                        ',
            aptitude_text: 'QUALIFIED W/SEM',
            cutText: 'G105, V95, N100, Q100'
            , aptitudeMinimums: [], jobs: []
        },
        {
            id: 57,
            interestCategory: 'Ldi',
            area: 11,
            group: 10,
            prefix: '11.10',
            name: 'Regulations Enforcement',
            description: 'Workers in this group enforce government regulations and company policies that affect peoples\' rights, health and safety, and finances.  They examine records, inspect products and investigate services, but do not engage in police work.',
            aptitude_text: 'QUALIFIED W/SEM',
            cutText: 'G105, N95, Q95'
            , aptitudeMinimums: [], jobs: []
        },
        {
            id: 58,
            interestCategory: 'Ldi',
            area: 11,
            group: 11,
            prefix: '11.11',
            name: 'Business Management',
            description: 'Workers in this group manage a business, such as a store or cemetery, a branch of a large company, such as a local office for a credit corporation, or a department within a company, such as a warehouse.  They usually carry out operating policies and procedures determined by administrative workers, such as presidents, vice presidents and directors.',
            aptitude_text: 'QUALIFIED',
            cutText: 'G100, V95, N95, Q100'
            , aptitudeMinimums: [], jobs: []
        },
        {
            id: 59,
            interestCategory: 'Ldi',
            area: 11,
            group: 12,
            prefix: '11.12',
            name: 'Contracts & Claims',
            description: 'Workers in this group negotiate contracts and settle claims for companies and individuals. Some make arrangements for agreements between buyers and sellers. Others investigate claims involving damage, injury and losses.',
            aptitude_text: 'QUALIFIED',
            cutText: 'G100, V95, N95, Q100'
            , aptitudeMinimums: [], jobs: []
        }
    ];


export const cutScoreJSON = [


    {
        workgroup_id: 1,
        acronym: 'GA',
        score: 100
    },
    {
        workgroup_id: 1,
        acronym: 'VA',
        score: 100
    },
    {
        workgroup_id: 1,
        acronym: 'QA',
        score: 100
    },
    {
        workgroup_id: 2,
        acronym: 'GA',
        score: 100
    },
    {
        workgroup_id: 2,
        acronym: 'SA',
        score: 100
    },
    {
        workgroup_id: 2,
        acronym: 'PA',
        score: 85
    },
    {
        workgroup_id: 3,
        acronym: 'GA',
        score: 100
    },
    {
        workgroup_id: 3,
        acronym: 'VA',
        score: 100
    },
    {
        workgroup_id: 4,
        acronym: 'GA',
        score: 110
    },
    {
        workgroup_id: 4,
        acronym: 'VA',
        score: 100
    },
    {
        workgroup_id: 4,
        acronym: 'QA',
        score: 100
    },
    {
        workgroup_id: 5,
        acronym: 'GA',
        score: 100
    },
    {
        workgroup_id: 5,
        acronym: 'SA',
        score: 95
    },
    {
        workgroup_id: 6,
        acronym: 'SA',
        score: 90
    },
    {
        workgroup_id: 6,
        acronym: 'PA',
        score: 85
    },
    {
        workgroup_id: 6,
        acronym: 'MD',
        score: 85
    },
    {
        workgroup_id: 7,
        acronym: 'GA',
        score: 115
    },
    {
        workgroup_id: 7,
        acronym: 'VA',
        score: 105
    },
    {
        workgroup_id: 7,
        acronym: 'NA',
        score: 110
    },
    {
        workgroup_id: 7,
        acronym: 'SA',
        score: 110
    },
    {
        workgroup_id: 8,
        acronym: 'GA',
        score: 115
    },
    {
        workgroup_id: 8,
        acronym: 'VA',
        score: 105
    },
    {
        workgroup_id: 8,
        acronym: 'NA',
        score: 110
    },
    {
        workgroup_id: 8,
        acronym: 'SA',
        score: 110
    },
    {
        workgroup_id: 9,
        acronym: 'GA',
        score: 115
    },
    {
        workgroup_id: 9,
        acronym: 'VA',
        score: 105
    },
    {
        workgroup_id: 9,
        acronym: 'NA',
        score: 110
    },
    {
        workgroup_id: 9,
        acronym: 'SA',
        score: 110
    },
    {
        workgroup_id: 10,
        acronym: 'GA',
        score: 105
    },
    {
        workgroup_id: 10,
        acronym: 'NA',
        score: 100
    },
    {
        workgroup_id: 11,
        acronym: 'GA',
        score: 100
    },
    {
        workgroup_id: 11,
        acronym: 'NA',
        score: 90
    },
    {
        workgroup_id: 12,
        acronym: 'GA',
        score: 95
    },
    {
        workgroup_id: 12,
        acronym: 'KC',
        score: 85
    },
    {
        workgroup_id: 12,
        acronym: 'MD',
        score: 85
    },
    {
        workgroup_id: 13,
        acronym: 'KC',
        score: 85
    },
    {
        workgroup_id: 13,
        acronym: 'MD',
        score: 80
    },
    {
        workgroup_id: 14,
        acronym: 'GA',
        score: 100
    },
    {
        workgroup_id: 14,
        acronym: 'QA',
        score: 95
    },
    {
        workgroup_id: 15,
        acronym: 'GA',
        score: 95
    },
    {
        workgroup_id: 16,
        acronym: 'GA',
        score: 115
    },
    {
        workgroup_id: 16,
        acronym: 'NA',
        score: 105
    },
    {
        workgroup_id: 16,
        acronym: 'SA',
        score: 110
    },
    {
        workgroup_id: 17,
        acronym: 'GA',
        score: 105
    },
    {
        workgroup_id: 17,
        acronym: 'VA',
        score: 100
    },
    {
        workgroup_id: 17,
        acronym: 'NA',
        score: 100
    },
    {
        workgroup_id: 17,
        acronym: 'SA',
        score: 95
    },
    {
        workgroup_id: 18,
        acronym: 'GA',
        score: 105
    },
    {
        workgroup_id: 18,
        acronym: 'NA',
        score: 100
    },
    {
        workgroup_id: 18,
        acronym: 'SA',
        score: 100
    },
    {
        workgroup_id: 19,
        acronym: 'GA',
        score: 105
    },
    {
        workgroup_id: 19,
        acronym: 'NA',
        score: 100
    },
    {
        workgroup_id: 19,
        acronym: 'SA',
        score: 100
    },
    {
        workgroup_id: 20,
        acronym: 'SA',
        score: 90
    },
    {
        workgroup_id: 20,
        acronym: 'PA',
        score: 85
    },
    {
        workgroup_id: 20,
        acronym: 'MD',
        score: 85
    },
    {
        workgroup_id: 21,
        acronym: 'NA',
        score: 90
    },
    {
        workgroup_id: 21,
        acronym: 'SA',
        score: 90
    },
    {
        workgroup_id: 21,
        acronym: 'PA',
        score: 85
    },
    {
        workgroup_id: 22,
        acronym: 'SA',
        score: 85
    },
    {
        workgroup_id: 22,
        acronym: 'PA',
        score: 80
    },
    {
        workgroup_id: 22,
        acronym: 'MD',
        score: 85
    },
    {
        workgroup_id: 23,
        acronym: 'GA',
        score: 95
    },
    {
        workgroup_id: 23,
        acronym: 'NA',
        score: 85
    },
    {
        workgroup_id: 23,
        acronym: 'QA',
        score: 90
    },
    {
        workgroup_id: 23,
        acronym: 'KC',
        score: 85
    },
    {
        workgroup_id: 24,
        acronym: 'SA',
        score: 85
    },
    {
        workgroup_id: 24,
        acronym: 'PA',
        score: 80
    },
    {
        workgroup_id: 24,
        acronym: 'KC',
        score: 85
    },
    {
        workgroup_id: 24,
        acronym: 'MD',
        score: 85
    },
    {
        workgroup_id: 25,
        acronym: 'SA',
        score: 85
    },
    {
        workgroup_id: 25,
        acronym: 'PA',
        score: 80
    },
    {
        workgroup_id: 25,
        acronym: 'MD',
        score: 85
    },
    {
        workgroup_id: 26,
        acronym: 'KC',
        score: 85
    },
    {
        workgroup_id: 26,
        acronym: 'MD',
        score: 80
    },
    {
        workgroup_id: 27,
        acronym: 'NA',
        score: 85
    },
    {
        workgroup_id: 27,
        acronym: 'SA',
        score: 90
    },
    {
        workgroup_id: 27,
        acronym: 'PA',
        score: 85
    },
    {
        workgroup_id: 27,
        acronym: 'MD',
        score: 85
    },
    {
        workgroup_id: 28,
        acronym: 'PA',
        score: 80
    },
    {
        workgroup_id: 28,
        acronym: 'KC',
        score: 85
    },
    {
        workgroup_id: 28,
        acronym: 'MD',
        score: 85
    },
    {
        workgroup_id: 29,
        acronym: 'PA',
        score: 80
    },
    {
        workgroup_id: 29,
        acronym: 'KC',
        score: 85
    },
    {
        workgroup_id: 29,
        acronym: 'MD',
        score: 85
    },
    {
        workgroup_id: 30,
        acronym: 'KC',
        score: 85
    },
    {
        workgroup_id: 30,
        acronym: 'FD',
        score: 80
    },
    {
        workgroup_id: 30,
        acronym: 'MD',
        score: 80
    },
    {
        workgroup_id: 31,
        acronym: 'GA',
        score: 100
    },
    {
        workgroup_id: 31,
        acronym: 'NA',
        score: 95
    },
    {
        workgroup_id: 31,
        acronym: 'QA',
        score: 100
    },
    {
        workgroup_id: 32,
        acronym: 'GA',
        score: 95
    },
    {
        workgroup_id: 32,
        acronym: 'NA',
        score: 90
    },
    {
        workgroup_id: 32,
        acronym: 'QA',
        score: 100
    },
    {
        workgroup_id: 33,
        acronym: 'GA',
        score: 95
    },
    {
        workgroup_id: 33,
        acronym: 'NA',
        score: 90
    },
    {
        workgroup_id: 33,
        acronym: 'QA',
        score: 100
    },
    {
        workgroup_id: 34,
        acronym: 'GA',
        score: 95
    },
    {
        workgroup_id: 34,
        acronym: 'QA',
        score: 95
    },
    {
        workgroup_id: 35,
        acronym: 'GA',
        score: 95
    },
    {
        workgroup_id: 35,
        acronym: 'QA',
        score: 95
    },
    {
        workgroup_id: 36,
        acronym: 'GA',
        score: 95
    },
    {
        workgroup_id: 36,
        acronym: 'QA',
        score: 100
    },
    {
        workgroup_id: 36,
        acronym: 'KC',
        score: 95
    },
    {
        workgroup_id: 37,
        acronym: 'QA',
        score: 90
    },
    {
        workgroup_id: 37,
        acronym: 'KC',
        score: 85
    },
    {
        workgroup_id: 38,
        acronym: 'GA',
        score: 100
    },
    {
        workgroup_id: 38,
        acronym: 'VA',
        score: 100
    },
    {
        workgroup_id: 38,
        acronym: 'NA',
        score: 95
    },
    {
        workgroup_id: 38,
        acronym: 'QA',
        score: 100
    },
    {
        workgroup_id: 39,
        acronym: 'GA',
        score: 95
    },
    {
        workgroup_id: 39,
        acronym: 'NA',
        score: 90
    },
    {
        workgroup_id: 39,
        acronym: 'QA',
        score: 90
    },
    {
        workgroup_id: 40,
        acronym: 'KC',
        score: 85
    },
    {
        workgroup_id: 40,
        acronym: 'MD',
        score: 80
    },
    {
        workgroup_id: 41,
        acronym: 'GA',
        score: 95
    },
    {
        workgroup_id: 42,
        acronym: 'SA',
        score: 85
    },
    {
        workgroup_id: 42,
        acronym: 'PA',
        score: 85
    },
    {
        workgroup_id: 42,
        acronym: 'KC',
        score: 90
    },
    {
        workgroup_id: 42,
        acronym: 'MD',
        score: 85
    },
    {
        workgroup_id: 43,
        acronym: 'SA',
        score: 85
    },
    {
        workgroup_id: 43,
        acronym: 'MD',
        score: 85
    },
    {
        workgroup_id: 44,
        acronym: 'KC',
        score: 85
    },
    {
        workgroup_id: 44,
        acronym: 'MD',
        score: 80
    },
    {
        workgroup_id: 45,
        acronym: 'GA',
        score: 105
    },
    {
        workgroup_id: 45,
        acronym: 'VA',
        score: 100
    },
    {
        workgroup_id: 45,
        acronym: 'NA',
        score: 100
    },
    {
        workgroup_id: 45,
        acronym: 'QA',
        score: 95
    },
    {
        workgroup_id: 46,
        acronym: 'GA',
        score: 105
    },
    {
        workgroup_id: 46,
        acronym: 'VA',
        score: 100
    },
    {
        workgroup_id: 47,
        acronym: 'GA',
        score: 95
    },
    {
        workgroup_id: 48,
        acronym: 'GA',
        score: 115
    },
    {
        workgroup_id: 48,
        acronym: 'VA',
        score: 100
    },
    {
        workgroup_id: 48,
        acronym: 'NA',
        score: 110
    },
    {
        workgroup_id: 48,
        acronym: 'SA',
        score: 100
    },
    {
        workgroup_id: 49,
        acronym: 'GA',
        score: 100
    },
    {
        workgroup_id: 49,
        acronym: 'VA',
        score: 100
    },
    {
        workgroup_id: 49,
        acronym: 'NA',
        score: 95
    },
    {
        workgroup_id: 49,
        acronym: 'QA',
        score: 100
    },
    {
        workgroup_id: 50,
        acronym: 'GA',
        score: 110
    },
    {
        workgroup_id: 50,
        acronym: 'VA',
        score: 100
    },
    {
        workgroup_id: 50,
        acronym: 'NA',
        score: 105
    },
    {
        workgroup_id: 50,
        acronym: 'QA',
        score: 100
    },
    {
        workgroup_id: 51,
        acronym: 'GA',
        score: 110
    },
    {
        workgroup_id: 51,
        acronym: 'VA',
        score: 100
    },
    {
        workgroup_id: 51,
        acronym: 'NA',
        score: 105
    },
    {
        workgroup_id: 51,
        acronym: 'QA',
        score: 100
    },
    {
        workgroup_id: 52,
        acronym: 'GA',
        score: 105
    },
    {
        workgroup_id: 52,
        acronym: 'VA',
        score: 95
    },
    {
        workgroup_id: 52,
        acronym: 'NA',
        score: 100
    },
    {
        workgroup_id: 52,
        acronym: 'QA',
        score: 100
    },
    {
        workgroup_id: 53,
        acronym: 'GA',
        score: 110
    },
    {
        workgroup_id: 53,
        acronym: 'VA',
        score: 95
    },
    {
        workgroup_id: 53,
        acronym: 'NA',
        score: 105
    },
    {
        workgroup_id: 53,
        acronym: 'QA',
        score: 100
    },
    {
        workgroup_id: 54,
        acronym: 'GA',
        score: 105
    },
    {
        workgroup_id: 54,
        acronym: 'VA',
        score: 95
    },
    {
        workgroup_id: 54,
        acronym: 'NA',
        score: 100
    },
    {
        workgroup_id: 54,
        acronym: 'QA',
        score: 100
    },
    {
        workgroup_id: 55,
        acronym: 'GA',
        score: 100
    },
    {
        workgroup_id: 55,
        acronym: 'VA',
        score: 100
    },
    {
        workgroup_id: 55,
        acronym: 'NA',
        score: 95
    },
    {
        workgroup_id: 55,
        acronym: 'QA',
        score: 100
    },
    {
        workgroup_id: 56,
        acronym: 'GA',
        score: 105
    },
    {
        workgroup_id: 56,
        acronym: 'VA',
        score: 95
    },
    {
        workgroup_id: 56,
        acronym: 'NA',
        score: 100
    },
    {
        workgroup_id: 56,
        acronym: 'QA',
        score: 100
    },
    {
        workgroup_id: 57,
        acronym: 'GA',
        score: 105
    },
    {
        workgroup_id: 57,
        acronym: 'NA',
        score: 95
    },
    {
        workgroup_id: 57,
        acronym: 'QA',
        score: 95
    },
    {
        workgroup_id: 58,
        acronym: 'GA',
        score: 100
    },
    {
        workgroup_id: 58,
        acronym: 'VA',
        score: 95
    },
    {
        workgroup_id: 58,
        acronym: 'NA',
        score: 95
    },
    {
        workgroup_id: 58,
        acronym: 'QA',
        score: 100
    },
    {
        workgroup_id: 59,
        acronym: 'GA',
        score: 100
    },
    {
        workgroup_id: 59,
        acronym: 'VA',
        score: 95
    },
    {
        workgroup_id: 59,
        acronym: 'NA',
        score: 95
    },
    {
        workgroup_id: 59,
        acronym: 'QA',
        score: 100
    }
];


export const jobsJSON = [

    {
        workgroup_id: 1,
        name: 'Editor, Book',
        dotnum: '132.067-014',
        m: '3',
        l: '       6',
        svp: '      8',
        wgcheck: '01.01'
    },
    {
        workgroup_id: 1,
        name: 'Critic',
        dotnum: '131.067-018',
        m: '2',
        l: '       6',
        svp: '      8',
        wgcheck: '01.01'
    },
    {
        workgroup_id: 1,
        name: 'Lyricist',
        dotnum: '131.067-034',
        m: '2',
        l: '       6',
        svp: '      7',
        wgcheck: '01.01'
    },
    {
        workgroup_id: 1,
        name: 'Screen Writer',
        dotnum: '131.067-050',
        m: '2',
        l: '       6',
        svp: '      7',
        wgcheck: '01.01'
    },
    {
        workgroup_id: 1,
        name: 'Editorial Writer',
        dotnum: '131.067-022',
        m: '3',
        l: '       5',
        svp: '      8',
        wgcheck: '01.01'
    },
    {
        workgroup_id: 1,
        name: 'Continuity Writer',
        dotnum: '131.087-010',
        m: '2',
        l: '       5',
        svp: '      7',
        wgcheck: '01.01'
    },
    {
        workgroup_id: 1,
        name: 'Copywriter',
        dotnum: '131.067-014',
        m: '2',
        l: '       5',
        svp: '      7',
        wgcheck: '01.01'
    },
    {
        workgroup_id: 2,
        name: 'Television Technician',
        dotnum: '194.062-010',
        m: '4',
        l: '       5',
        svp: '      7',
        wgcheck: '01.02'
    },
    {
        workgroup_id: 2,
        name: 'Teacher, Art',
        dotnum: '149.021-010',
        m: '4',
        l: '       5',
        svp: '      7',
        wgcheck: '01.02'
    },
    {
        workgroup_id: 2,
        name: 'Industrial Designer',
        dotnum: '142.061-026',
        m: '4',
        l: '       4',
        svp: '      7',
        wgcheck: '01.02'
    },
    {
        workgroup_id: 2,
        name: 'Furniture Designer',
        dotnum: '142.061-022',
        m: '4',
        l: '       4',
        svp: '      7',
        wgcheck: '01.02'
    },
    {
        workgroup_id: 2,
        name: 'Creative Director',
        dotnum: '141.067-010',
        m: '3',
        l: '       5',
        svp: '      8',
        wgcheck: '01.02'
    },
    {
        workgroup_id: 2,
        name: 'Photographer, Still',
        dotnum: '143.062-030',
        m: '3',
        l: '       4',
        svp: '      7',
        wgcheck: '01.02'
    },
    {
        workgroup_id: 2,
        name: 'Package Designer',
        dotnum: '142.081-018',
        m: '3',
        l: '       4',
        svp: '      7',
        wgcheck: '01.02'
    },
    {
        workgroup_id: 2,
        name: 'Interior Designer',
        dotnum: '142.051-014',
        m: '3',
        l: '       4',
        svp: '      7',
        wgcheck: '01.02'
    },
    {
        workgroup_id: 2,
        name: 'Commercial Designer',
        dotnum: '141.061-038',
        m: '3',
        l: '       4',
        svp: '      7',
        wgcheck: '01.02'
    },
    {
        workgroup_id: 2,
        name: 'Graphic Designer',
        dotnum: '141.061-018',
        m: '3',
        l: '       4',
        svp: '      7',
        wgcheck: '01.02'
    },
    {
        workgroup_id: 2,
        name: 'Police Artist',
        dotnum: '141.061-034',
        m: '3',
        l: '       4',
        svp: '      7',
        wgcheck: '01.02'
    },
    {
        workgroup_id: 2,
        name: 'Delineator',
        dotnum: '970.281-014',
        m: '3',
        l: '       3',
        svp: '      7',
        wgcheck: '01.02'
    },
    {
        workgroup_id: 2,
        name: 'Floral Designer',
        dotnum: '142.081-010',
        m: '3',
        l: '       3',
        svp: '      6',
        wgcheck: '01.02'
    },
    {
        workgroup_id: 2,
        name: 'Printmaker',
        dotnum: '144.061-014',
        m: '2',
        l: '       4',
        svp: '      8',
        wgcheck: '01.02'
    },
    {
        workgroup_id: 2,
        name: 'Photojournalist',
        dotnum: '143.062-034',
        m: '2',
        l: '       4',
        svp: '      7',
        wgcheck: '01.02'
    },
    {
        workgroup_id: 2,
        name: 'Fashion Artist',
        dotnum: '141.061-014',
        m: '2',
        l: '       4',
        svp: '      7',
        wgcheck: '01.02'
    },
    {
        workgroup_id: 2,
        name: 'Photographer, Helper',
        dotnum: '976.667-010',
        m: '2',
        l: '       2',
        svp: '      4',
        wgcheck: '01.02'
    },
    {
        workgroup_id: 2,
        name: 'Quick-Sketch Artist',
        dotnum: '149.041-010',
        m: '1',
        l: '       3',
        svp: '      6',
        wgcheck: '01.02'
    },
    {
        workgroup_id: 3,
        name: 'Director, Motion Picture',
        dotnum: '159.067-010',
        m: '4',
        l: '5',
        svp: '8',
        wgcheck: '01.03'
    },
    {
        workgroup_id: 3,
        name: 'Producer',
        dotnum: '159.117-010',
        m: '4',
        l: '5',
        svp: '8',
        wgcheck: '01.03'
    },
    {
        workgroup_id: 3,
        name: 'Disc Jockey',
        dotnum: '159.147-014',
        m: '3',
        l: '       5',
        svp: '      5',
        wgcheck: '01.03'
    },
    {
        workgroup_id: 3,
        name: 'Announcer',
        dotnum: '159.147-010',
        m: '3',
        l: '       4',
        svp: '      6',
        wgcheck: '01.03'
    },
    {
        workgroup_id: 3,
        name: 'Interpreter, Deaf',
        dotnum: '137.267-014',
        m: '3',
        l: '       4',
        svp: '      5',
        wgcheck: '01.03'
    },
    {
        workgroup_id: 3,
        name: 'Actor',
        dotnum: '150.047-010',
        m: '2',
        l: '       5',
        svp: '      7',
        wgcheck: '01.03'
    },
    {
        workgroup_id: 3,
        name: 'Teacher, Drama',
        dotnum: '150.027-014',
        m: '2',
        l: '5',
        svp: '7',
        wgcheck: '01.03'
    },
    {
        workgroup_id: 3,
        name: 'Program Coordinator',
        dotnum: '139.167-010',
        m: '2',
        l: '       4',
        svp: '      8',
        wgcheck: '01.03'
    },
    {
        workgroup_id: 3,
        name: 'Program Assistant',
        dotnum: '962.167-014',
        m: '2',
        l: '       3',
        svp: '      5',
        wgcheck: '01.03'
    },
    {
        workgroup_id: 4,
        name: 'Cue Selector',
        dotnum: '152.067-018',
        m: '4',
        l: '5',
        svp: '9',
        wgcheck: '01.04'
    },
    {
        workgroup_id: 4,
        name: 'Teacher, Music',
        dotnum: '152.021-010',
        m: '3',
        l: '       5',
        svp: '      7',
        wgcheck: '01.04'
    },
    {
        workgroup_id: 4,
        name: 'Singer',
        dotnum: '152.047-022',
        m: '3',
        l: '       4',
        svp: '      8',
        wgcheck: '01.04'
    },
    {
        workgroup_id: 4,
        name: 'Musician, Instrumental',
        dotnum: '152.041-010',
        m: '3',
        l: '       3',
        svp: '      8',
        wgcheck: '01.04'
    },
    {
        workgroup_id: 5,
        name: 'Instructor, Dance',
        dotnum: '151.027-014',
        m: '2',
        l: '       5',
        svp: '      6',
        wgcheck: '01.05'
    },
    {
        workgroup_id: 5,
        name: 'Manager, Dance Studio',
        dotnum: '187.167-086',
        m: '3',
        l: '4',
        svp: '6',
        wgcheck: '01.05'
    },
    {
        workgroup_id: 5,
        name: 'Dancer',
        dotnum: '151.047-010',
        m: '2',
        l: '       4',
        svp: '      7',
        wgcheck: '01.05'
    },
    {
        workgroup_id: 6,
        name: 'Restorer, Paper & Prints',
        dotnum: '109.361-010',
        m: '5',
        l: '       5',
        svp: '      7',
        wgcheck: '01.06'
    },
    {
        workgroup_id: 6,
        name: 'Prop Maker',
        dotnum: '962.281-010',
        m: '4',
        l: '       4',
        svp: '      7',
        wgcheck: '01.06'
    },
    {
        workgroup_id: 6,
        name: 'Paste-up Artist',
        dotnum: '972.381-030',
        m: '4',
        l: '       3',
        svp: '      7',
        wgcheck: '01.06'
    },
    {
        workgroup_id: 6,
        name: 'Computer Typesetter',
        dotnum: '979.382-026',
        m: '3',
        l: '       4',
        svp: '      6',
        wgcheck: '01.06'
    },
    {
        workgroup_id: 6,
        name: 'Electr. Prepress Sys. Oper.',
        dotnum: '979.282-010',
        m: '3',
        l: '       3',
        svp: '      7',
        wgcheck: '01.06'
    },
    {
        workgroup_id: 6,
        name: 'Jeweler',
        dotnum: '700.281-010',
        m: '3',
        l: '       3',
        svp: '      7',
        wgcheck: '01.06'
    },
    {
        workgroup_id: 6,
        name: 'Etcher, Photoengraving',
        dotnum: '971.381-014',
        m: '2',
        l: '       4',
        svp: '      8',
        wgcheck: '01.06'
    },
    {
        workgroup_id: 6,
        name: 'Photographer, Lithographic',
        dotnum: '972.382-014',
        m: '2',
        l: '       3',
        svp: '      7',
        wgcheck: '01.06'
    },
    {
        workgroup_id: 6,
        name: 'Lay-out Former',
        dotnum: '970.381-018',
        m: '2',
        l: '       3',
        svp: '      7',
        wgcheck: '01.06'
    },
    {
        workgroup_id: 6,
        name: 'Silversmith II',
        dotnum: '700.281-022',
        m: '2',
        l: '       3',
        svp: '      7',
        wgcheck: '01.06'
    },
    {
        workgroup_id: 6,
        name: 'Printer',
        dotnum: '979.382-018',
        m: '2',
        l: '       3',
        svp: '      5',
        wgcheck: '01.06'
    },
    {
        workgroup_id: 6,
        name: 'Mortuary Beautician',
        dotnum: '339.361-010',
        m: '2',
        l: '2',
        svp: '6',
        wgcheck: '01.06'
    },
    {
        workgroup_id: 6,
        name: 'Enameler',
        dotnum: '740.684-018',
        m: '2',
        l: '       2',
        svp: '      4',
        wgcheck: '01.06'
    },
    {
        workgroup_id: 6,
        name: 'Gift Wrapper',
        dotnum: '299.364-014',
        m: '2',
        l: '       1',
        svp: '      3',
        wgcheck: '01.06'
    },
    {
        workgroup_id: 6,
        name: 'Silk-Screen Cutter',
        dotnum: '979.681-022',
        m: '1',
        l: '       2',
        svp: '      5',
        wgcheck: '01.06'
    },
    {
        workgroup_id: 6,
        name: 'Picture Framer',
        dotnum: '739.684-146',
        m: '1',
        l: '       1',
        svp: '      5',
        wgcheck: '01.06'
    },
    {
        workgroup_id: 7,
        name: 'Geodesist',
        dotnum: '024.061-014',
        m: '6',
        l: '       6',
        svp: '      8',
        wgcheck: '02.01'
    },
    {
        workgroup_id: 7,
        name: 'Environmental Analyst',
        dotnum: '029.081-010',
        m: '6',
        l: '       6',
        svp: '      8',
        wgcheck: '02.01'
    },
    {
        workgroup_id: 7,
        name: 'Chemist',
        dotnum: '022.061-010',
        m: '6',
        l: '       5',
        svp: '      8',
        wgcheck: '02.01'
    },
    {
        workgroup_id: 7,
        name: 'Aerial-Photograph Interpreter',
        dotnum: '029.167-010',
        m: '5',
        l: '       5',
        svp: '      7',
        wgcheck: '02.01'
    },
    {
        workgroup_id: 7,
        name: 'Chemist, Instrumentation',
        dotnum: '022.261-018',
        m: '5',
        l: '       4',
        svp: '      7',
        wgcheck: '02.01'
    },
    {
        workgroup_id: 8,
        name: 'Forest Ecologist',
        dotnum: '040.061-030',
        m: '6',
        l: '       6',
        svp: '      8',
        wgcheck: '02.02'
    },
    {
        workgroup_id: 8,
        name: 'Biochemist',
        dotnum: '041.061-026',
        m: '6',
        l: '       6',
        svp: '      8',
        wgcheck: '02.02'
    },
    {
        workgroup_id: 8,
        name: 'Geneticist',
        dotnum: '041.061-050',
        m: '6',
        l: '6',
        svp: '      8',
        wgcheck: '02.02'
    },
    {
        workgroup_id: 8,
        name: 'Pharmacologist',
        dotnum: '041.061-074',
        m: '6',
        l: '6',
        svp: '      8',
        wgcheck: '02.02'
    },
    {
        workgroup_id: 8,
        name: 'Biomedical Engineer',
        dotnum: '019.061-010',
        m: '6',
        l: '       5',
        svp: '      8',
        wgcheck: '02.02'
    },
    {
        workgroup_id: 8,
        name: 'Dietitian, Research',
        dotnum: '077.061-010',
        m: '5',
        l: '5',
        svp: '      8',
        wgcheck: '02.02'
    },
    {
        workgroup_id: 8,
        name: 'Coroner',
        dotnum: '168.161-010',
        m: '5',
        l: '       4',
        svp: '      7',
        wgcheck: '02.02'
    },
    {
        workgroup_id: 8,
        name: 'Veterinary Parasitologist',
        dotnum: '073.061-026',
        m: '4',
        l: '       5',
        svp: '      8',
        wgcheck: '02.02'
    },
    {
        workgroup_id: 8,
        name: 'Soil-Conservation Tech.',
        dotnum: '040.261-010',
        m: '4',
        l: '       4',
        svp: '      7',
        wgcheck: '02.02'
    },
    {
        workgroup_id: 8,
        name: 'Veterinary Pharmacologist',
        dotnum: '073.061-034',
        m: '4',
        l: '       4',
        svp: '      8',
        wgcheck: '02.02'
    },
    {
        workgroup_id: 9,
        name: 'Surgeon',
        dotnum: '070.101-094',
        m: '5',
        l: '       6',
        svp: '      9',
        wgcheck: '02.03'
    },
    {
        workgroup_id: 9,
        name: 'Dentist',
        dotnum: '072.101-010',
        m: '5',
        l: '       5',
        svp: '      8',
        wgcheck: '02.03'
    },
    {
        workgroup_id: 9,
        name: 'Speech Pathologist',
        dotnum: '076.107-010',
        m: '5',
        l: '       5',
        svp: '      7',
        wgcheck: '02.03'
    },
    {
        workgroup_id: 9,
        name: 'Veterinarian',
        dotnum: '073.101-010',
        m: '4',
        l: '       5',
        svp: '      8',
        wgcheck: '02.03'
    },
    {
        workgroup_id: 9,
        name: 'Audiologist',
        dotnum: '076.101-010',
        m: '4',
        l: '       5',
        svp: '      7',
        wgcheck: '02.03'
    },
    {
        workgroup_id: 9,
        name: 'Optometrist',
        dotnum: '079.101-018',
        m: '4',
        l: '       5',
        svp: '      7',
        wgcheck: '02.03'
    },
    {
        workgroup_id: 9,
        name: 'Podiatrist',
        dotnum: '079.101-022',
        m: '4',
        l: '       5',
        svp: '      7',
        wgcheck: '02.03'
    },
    {
        workgroup_id: 10,
        name: 'Criminalist',
        dotnum: '029.261-026',
        m: '5',
        l: '       5',
        svp: '      7',
        wgcheck: '02.04'
    },
    {
        workgroup_id: 10,
        name: 'Quality Control Technician',
        dotnum: '012.261-014',
        m: '5',
        l: '       4',
        svp: '      7',
        wgcheck: '02.04'
    },
    {
        workgroup_id: 10,
        name: 'Medical Technologist',
        dotnum: '078.261-038',
        m: '4',
        l: '       5',
        svp: '      7',
        wgcheck: '02.04'
    },
    {
        workgroup_id: 10,
        name: 'Metallurgical Technician',
        dotnum: '011.261-010',
        m: '4',
        l: '       4',
        svp: '      6',
        wgcheck: '02.04'
    },
    {
        workgroup_id: 10,
        name: 'Medical-Laboratory Tech.',
        dotnum: '078.381-014',
        m: '4',
        l: '       4',
        svp: '      5',
        wgcheck: '02.04'
    },
    {
        workgroup_id: 10,
        name: 'Pharmacist Assistant',
        dotnum: '074.381-010',
        m: '4',
        l: '3',
        svp: '6',
        wgcheck: '02.04'
    },
    {
        workgroup_id: 10,
        name: 'Photo-Optics Technician',
        dotnum: '029.280-010',
        m: '4',
        l: '       3',
        svp: '      6',
        wgcheck: '02.04'
    },
    {
        workgroup_id: 10,
        name: 'Immunohematologist',
        dotnum: '078.261-046',
        m: '3',
        l: '       5',
        svp: '      8',
        wgcheck: '02.04'
    },
    {
        workgroup_id: 10,
        name: 'Examiner, Questioned Documents',
        dotnum: '199.267-022',
        m: '2',
        l: '       4',
        svp: '      6',
        wgcheck: '02.04'
    },
    {
        workgroup_id: 10,
        name: 'Biology Specimen Tech.',
        dotnum: '041.381-010',
        m: '3',
        l: '       3',
        svp: '      7',
        wgcheck: '02.04'
    },
    {
        workgroup_id: 10,
        name: 'Phlebotomist',
        dotnum: '079.364-022',
        m: '2',
        l: '       3',
        svp: '      3',
        wgcheck: '02.04'
    },
    {
        workgroup_id: 10,
        name: 'Feed-Research Aide',
        dotnum: '049.364-010',
        m: '2',
        l: '       2',
        svp: '      4',
        wgcheck: '02.04'
    },
    {
        workgroup_id: 11,
        name: 'Manager, Nursery',
        dotnum: '180.167-042',
        m: '4',
        l: '       5',
        svp: '      8',
        wgcheck: '03.01'
    },
    {
        workgroup_id: 11,
        name: 'Landscape Contractor',
        dotnum: '182.167-014',
        m: '4',
        l: '       4',
        svp: '      8',
        wgcheck: '03.01'
    },
    {
        workgroup_id: 11,
        name: 'Farmer, Diversified Crops',
        dotnum: '407.161-010',
        m: '4',
        l: '       4',
        svp: '      7',
        wgcheck: '03.01'
    },
    {
        workgroup_id: 11,
        name: 'Landscape Gardener',
        dotnum: '408.161-010',
        m: '4',
        l: '4',
        svp: '7',
        wgcheck: '03.01'
    },
    {
        workgroup_id: 11,
        name: 'Horticultural-Spec. Grower',
        dotnum: '405.161-018',
        m: '3',
        l: '       4',
        svp: '      7',
        wgcheck: '03.01'
    },
    {
        workgroup_id: 11,
        name: 'Farmer, Cash Grain',
        dotnum: '401.161-010',
        m: '3',
        l: '       3',
        svp: '      7',
        wgcheck: '03.01'
    },
    {
        workgroup_id: 11,
        name: 'Poultry Farmer',
        dotnum: '411.161-018',
        m: '3',
        l: '       3',
        svp: '      7',
        wgcheck: '03.01'
    },
    {
        workgroup_id: 11,
        name: 'Tree Surgeon',
        dotnum: '408.181-010',
        m: '2',
        l: '       2',
        svp: '      6',
        wgcheck: '03.01'
    },
    {
        workgroup_id: 11,
        name: 'Fish Farmer',
        dotnum: '446.161-010',
        m: '1',
        l: '       2',
        svp: '      6',
        wgcheck: '03.01'
    },
    {
        workgroup_id: 12,
        name: 'Animal Trainer',
        dotnum: '159.224-010',
        m: '3',
        l: '       3',
        svp: '      6',
        wgcheck: '03.03'
    },
    {
        workgroup_id: 12,
        name: 'Instructor-Trainer, Canine',
        dotnum: '379.227-010',
        m: '2',
        l: '       3',
        svp: '      7',
        wgcheck: '03.03'
    },
    {
        workgroup_id: 12,
        name: 'Dog Groomer',
        dotnum: '418.674-010',
        m: '2',
        l: '       3',
        svp: '      4',
        wgcheck: '03.03'
    },
    {
        workgroup_id: 12,
        name: 'Horse Trainer',
        dotnum: '419.224-010',
        m: '2',
        l: '       2',
        svp: '      7',
        wgcheck: '03.03'
    },
    {
        workgroup_id: 12,
        name: 'Animal Keeper',
        dotnum: '412.674-010',
        m: '2',
        l: '       2',
        svp: '      4',
        wgcheck: '03.03'
    },
    {
        workgroup_id: 12,
        name: 'Commissary Assistant',
        dotnum: '412.687-010',
        m: '2',
        l: '       1',
        svp: '      2',
        wgcheck: '03.03'
    },
    {
        workgroup_id: 12,
        name: 'Hoof & Shoe Inspector',
        dotnum: '153.287-010',
        m: '1',
        l: '       3',
        svp: '      6',
        wgcheck: '03.03'
    },
    {
        workgroup_id: 12,
        name: 'Animal Caretaker',
        dotnum: '410.674-010',
        m: '1',
        l: '       1',
        svp: '      4',
        wgcheck: '03.03'
    },
    {
        workgroup_id: 13,
        name: 'Plant Propagator',
        dotnum: '405.361-010',
        m: '4',
        l: '       4',
        svp: '      6',
        wgcheck: '03.04'
    },
    {
        workgroup_id: 13,
        name: 'Farmworker, Livestock',
        dotnum: '410.664-010',
        m: '3',
        l: '       3',
        svp: '      4',
        wgcheck: '03.04'
    },
    {
        workgroup_id: 13,
        name: 'Garden Worker',
        dotnum: '406.684-018',
        m: '2',
        l: '       3',
        svp: '      4',
        wgcheck: '03.04'
    },
    {
        workgroup_id: 13,
        name: 'Farmworker, General I',
        dotnum: '421.683-010',
        m: '2',
        l: '       3',
        svp: '      5',
        wgcheck: '03.04'
    },
    {
        workgroup_id: 13,
        name: 'Tree Trimmer',
        dotnum: '408.664-010',
        m: '2',
        l: '       2',
        svp: '      4',
        wgcheck: '03.04'
    },
    {
        workgroup_id: 13,
        name: 'Farmworker, Poultry',
        dotnum: '411.584-010',
        m: '2',
        l: '2',
        svp: '3',
        wgcheck: '03.04'
    },
    {
        workgroup_id: 13,
        name: 'Lawn-Service Worker',
        dotnum: '408.684-010',
        m: '2',
        l: '       2',
        svp: '      4',
        wgcheck: '03.04'
    },
    {
        workgroup_id: 13,
        name: 'Laborer, Landscape',
        dotnum: '408.687-014',
        m: '2',
        l: '2',
        svp: '2',
        wgcheck: '03.04'
    },
    {
        workgroup_id: 13,
        name: 'Greenskeeper II',
        dotnum: '406.683-010',
        m: '1',
        l: '       2',
        svp: '      3',
        wgcheck: '03.04'
    },
    {
        workgroup_id: 13,
        name: 'Groundskeeper, Ind.-Comm.',
        dotnum: '406.684-014',
        m: '1',
        l: '       2',
        svp: '      3',
        wgcheck: '03.04'
    },
    {
        workgroup_id: 13,
        name: 'Logging-Tractor Operator',
        dotnum: '929.663-010',
        m: '1',
        l: '       1',
        svp: '      4',
        wgcheck: '03.04'
    },
    {
        workgroup_id: 13,
        name: 'Forest-Fire Fighter',
        dotnum: '452.687-014',
        m: '1',
        l: '1',
        svp: '2',
        wgcheck: '03.04'
    },
    {
        workgroup_id: 13,
        name: 'Harvest Worker, Fruit',
        dotnum: '403.687-018',
        m: '1',
        l: '1',
        svp: '2',
        wgcheck: '03.04'
    },
    {
        workgroup_id: 13,
        name: 'Packer, Agric. Produce',
        dotnum: '920.687-134',
        m: '1',
        l: '       1',
        svp: '      2',
        wgcheck: '03.04'
    },
    {
        workgroup_id: 14,
        name: 'Special Agent, Customs',
        dotnum: '188.167-090',
        m: '3',
        l: '       5',
        svp: '      8',
        wgcheck: '04.01'
    },
    {
        workgroup_id: 14,
        name: 'Police Inspector I',
        dotnum: '375.267-026',
        m: '3',
        l: '4',
        svp: '7',
        wgcheck: '04.01'
    },
    {
        workgroup_id: 14,
        name: 'Pilot, Highway Patrol',
        dotnum: '375.163-014',
        m: '3',
        l: '       4',
        svp: '      6',
        wgcheck: '04.01'
    },
    {
        workgroup_id: 14,
        name: 'Fire Marshal',
        dotnum: '373.167-018',
        m: '3',
        l: '       3',
        svp: '      7',
        wgcheck: '04.01'
    },
    {
        workgroup_id: 14,
        name: 'Detective',
        dotnum: '375.267-010',
        m: '2',
        l: '3',
        svp: '7',
        wgcheck: '04.01'
    },
    {
        workgroup_id: 14,
        name: 'Detective Chief',
        dotnum: '375.167-022',
        m: '2',
        l: '3',
        svp: '7',
        wgcheck: '04.01'
    },
    {
        workgroup_id: 14,
        name: 'Police Officer I',
        dotnum: '375.263-014',
        m: '2',
        l: '3',
        svp: '6',
        wgcheck: '04.01'
    },
    {
        workgroup_id: 14,
        name: 'Deputy U.S. Marshal',
        dotnum: '377.267-010',
        m: '2',
        l: '3',
        svp: '5',
        wgcheck: '04.01'
    },
    {
        workgroup_id: 14,
        name: 'Sheriff, Deputy',
        dotnum: '377.263-010',
        m: '2',
        l: '       3',
        svp: '      5',
        wgcheck: '04.01'
    },
    {
        workgroup_id: 15,
        name: 'Security Consultant',
        dotnum: '189.167-054',
        m: '3',
        l: '       5',
        svp: '      7',
        wgcheck: '04.02'
    },
    {
        workgroup_id: 15,
        name: 'Dispatcher, Security Guard',
        dotnum: '372.167-010',
        m: '3',
        l: '3',
        svp: '6',
        wgcheck: '04.02'
    },
    {
        workgroup_id: 15,
        name: 'Disaster Control Specialist',
        dotnum: '378.267-014',
        m: '3',
        l: '3',
        svp: '6',
        wgcheck: '04.02'
    },
    {
        workgroup_id: 15,
        name: 'Fire Inspector',
        dotnum: '373.367-010',
        m: '3',
        l: '       3',
        svp: '      5',
        wgcheck: '04.02'
    },
    {
        workgroup_id: 15,
        name: 'Police Officer, Booking',
        dotnum: '375.367-018',
        m: '3',
        l: '3',
        svp: '4',
        wgcheck: '04.02'
    },
    {
        workgroup_id: 15,
        name: 'Fire Fighter',
        dotnum: '373.364-010',
        m: '2',
        l: '       3',
        svp: '      6',
        wgcheck: '04.02'
    },
    {
        workgroup_id: 15,
        name: 'Community Svc Officer, Patrol',
        dotnum: '372.367-010',
        m: '2',
        l: '3',
        svp: '3',
        wgcheck: '04.02'
    },
    {
        workgroup_id: 15,
        name: 'Repossessor',
        dotnum: '241.367-022',
        m: '2',
        l: '2',
        svp: '3',
        wgcheck: '04.02'
    },
    {
        workgroup_id: 15,
        name: 'Alarm Investigator',
        dotnum: '376.367-010',
        m: '1',
        l: '       3',
        svp: '      3',
        wgcheck: '04.02'
    },
    {
        workgroup_id: 15,
        name: 'Surveillance-System Monitor',
        dotnum: '379.367-010',
        m: '1',
        l: '3',
        svp: '2',
        wgcheck: '04.02'
    },
    {
        workgroup_id: 15,
        name: 'Police Officer II',
        dotnum: '375.367-010',
        m: '1',
        l: '       2',
        svp: '      5',
        wgcheck: '04.02'
    },
    {
        workgroup_id: 16,
        name: 'Aeronautical Project Engineer',
        dotnum: '002.167-018',
        m: '6',
        l: '6',
        svp: '9',
        wgcheck: '05.01'
    },
    {
        workgroup_id: 16,
        name: 'Elec. Engineer, Power System',
        dotnum: '003.167-018',
        m: '6',
        l: '6',
        svp: '8',
        wgcheck: '05.01'
    },
    {
        workgroup_id: 16,
        name: 'Quality Control Engineer',
        dotnum: '121.167-054',
        m: '6',
        l: '6',
        svp: '8',
        wgcheck: '05.01'
    },
    {
        workgroup_id: 16,
        name: 'Structural Engineer',
        dotnum: '005.061-034',
        m: '5',
        l: '       5',
        svp: '      8',
        wgcheck: '05.01'
    },
    {
        workgroup_id: 16,
        name: 'Electrical Engineer',
        dotnum: '003.061-010',
        m: '5',
        l: '5',
        svp: '8',
        wgcheck: '05.01'
    },
    {
        workgroup_id: 16,
        name: 'Applic. Engineer, Manufacturing',
        dotnum: '007.061-038',
        m: '5',
        l: '5',
        svp: '8',
        wgcheck: '05.01'
    },
    {
        workgroup_id: 16,
        name: 'Electronics-Design Engineer',
        dotnum: '003.061-034',
        m: '5',
        l: '5',
        svp: '8',
        wgcheck: '05.01'
    },
    {
        workgroup_id: 16,
        name: 'Plant Engineer',
        dotnum: '007.167-014',
        m: '5',
        l: '       5',
        svp: '      8',
        wgcheck: '05.01'
    },
    {
        workgroup_id: 16,
        name: 'Management Analyst',
        dotnum: '161.167-010',
        m: '5',
        l: '       5',
        svp: '      7',
        wgcheck: '05.01'
    },
    {
        workgroup_id: 16,
        name: 'Tech., Semiconductor Dev.',
        dotnum: '003.161-018',
        m: '5',
        l: '       4',
        svp: '      8',
        wgcheck: '05.01'
    },
    {
        workgroup_id: 16,
        name: 'Land Surveyor',
        dotnum: '018.167-018',
        m: '5',
        l: '       4',
        svp: '      7',
        wgcheck: '05.01'
    },
    {
        workgroup_id: 16,
        name: 'Electronics Technician',
        dotnum: '003.161-014',
        m: '5',
        l: '       4',
        svp: '      7',
        wgcheck: '05.01'
    },
    {
        workgroup_id: 16,
        name: 'Test Technician',
        dotnum: '019.161-014',
        m: '4',
        l: '4',
        svp: '7',
        wgcheck: '05.01'
    },
    {
        workgroup_id: 16,
        name: 'Mech.-Engineer Technician',
        dotnum: '007.161-026',
        m: '4',
        l: '       4',
        svp: '      7',
        wgcheck: '05.01'
    },
    {
        workgroup_id: 16,
        name: 'Electrical Technician',
        dotnum: '003.161-010',
        m: '4',
        l: '       4',
        svp: '      7',
        wgcheck: '05.01'
    },
    {
        workgroup_id: 16,
        name: 'Production Engineer, Track',
        dotnum: '005.167-026',
        m: '3',
        l: '       4',
        svp: '      9',
        wgcheck: '05.01'
    },
    {
        workgroup_id: 16,
        name: 'Preventive Maint. Coord.',
        dotnum: '169.167-074',
        m: '3',
        l: '       3',
        svp: '      7',
        wgcheck: '05.01'
    },
    {
        workgroup_id: 17,
        name: 'Mgr., Quality Control',
        dotnum: '012.167-014',
        m: '5',
        l: '       5',
        svp: '      8',
        wgcheck: '05.02'
    },
    {
        workgroup_id: 17,
        name: 'Superint., Construction',
        dotnum: '182.167-026',
        m: '5',
        l: '       4',
        svp: '      7',
        wgcheck: '05.02'
    },
    {
        workgroup_id: 17,
        name: 'Superint., Sanitation',
        dotnum: '188.167-098',
        m: '4',
        l: '       5',
        svp: '      7',
        wgcheck: '05.02'
    },
    {
        workgroup_id: 17,
        name: 'Supervisor of Communications',
        dotnum: '184.167-230',
        m: '4',
        l: '4',
        svp: '8',
        wgcheck: '05.02'
    },
    {
        workgroup_id: 17,
        name: 'Mgr., Customer Tech. Svcs.',
        dotnum: '189.117-018',
        m: '4',
        l: '       4',
        svp: '      8',
        wgcheck: '05.02'
    },
    {
        workgroup_id: 17,
        name: 'Tooling Coord., Prod. Eng.',
        dotnum: '169.167-054',
        m: '4',
        l: '       4',
        svp: '      7',
        wgcheck: '05.02'
    },
    {
        workgroup_id: 17,
        name: 'Superint., Maintenance',
        dotnum: '184.167-170',
        m: '4',
        l: '       3',
        svp: '      7',
        wgcheck: '05.02'
    },
    {
        workgroup_id: 17,
        name: 'Rep., Personal Service',
        dotnum: '236.252-010',
        m: '3',
        l: '       5',
        svp: '      6',
        wgcheck: '05.02'
    },
    {
        workgroup_id: 17,
        name: 'General Supervisor',
        dotnum: '183.167-022',
        m: '3',
        l: '       4',
        svp: '      8',
        wgcheck: '05.02'
    },
    {
        workgroup_id: 17,
        name: 'Ass\'t Construc. Superintendent',
        dotnum: '869.367-010',
        m: '3',
        l: '3',
        svp: '7',
        wgcheck: '05.02'
    },
    {
        workgroup_id: 17,
        name: 'Mgr., Solid-Waste-Disposal',
        dotnum: '184.167-078',
        m: '3',
        l: '       3',
        svp: '      7',
        wgcheck: '05.02'
    },
    {
        workgroup_id: 17,
        name: 'Quality Control Coordinator',
        dotnum: '168.167-066',
        m: '4',
        l: '4',
        svp: '6',
        wgcheck: '05.02'
    },
    {
        workgroup_id: 17,
        name: 'Property Coordinator',
        dotnum: '962.167-018',
        m: '1',
        l: '       3',
        svp: '      7',
        wgcheck: '05.02'
    },
    {
        workgroup_id: 18,
        name: 'Procurement Engineer',
        dotnum: '162.157-034',
        m: '5',
        l: '5',
        svp: '7',
        wgcheck: '05.03'
    },
    {
        workgroup_id: 18,
        name: 'Supervisor , Vendor Quality',
        dotnum: '121.670-062',
        m: '5',
        l: '5',
        svp: '7',
        wgcheck: '05.03'
    },
    {
        workgroup_id: 18,
        name: 'Material Scheduler',
        dotnum: '012.167-082',
        m: '5',
        l: '       5',
        svp: '      7',
        wgcheck: '05.03'
    },
    {
        workgroup_id: 18,
        name: 'Indust. Engineering Tech.',
        dotnum: '012.267-010',
        m: '5',
        l: '       4',
        svp: '      7',
        wgcheck: '05.03'
    },
    {
        workgroup_id: 18,
        name: 'Drafter, Commercial',
        dotnum: '017.261-026',
        m: '5',
        l: '       4',
        svp: '      6',
        wgcheck: '05.03'
    },
    {
        workgroup_id: 18,
        name: 'Field Engineer',
        dotnum: '193.262-018',
        m: '4',
        l: '       5',
        svp: '      7',
        wgcheck: '05.03'
    },
    {
        workgroup_id: 18,
        name: 'Int. Circ. Layout Designer',
        dotnum: '003.261-018',
        m: '4',
        l: '       4',
        svp: '      8',
        wgcheck: '05.03'
    },
    {
        workgroup_id: 18,
        name: 'Inspector, Plumbing',
        dotnum: '168.167-050',
        m: '4',
        l: '       4',
        svp: '      7',
        wgcheck: '05.03'
    },
    {
        workgroup_id: 18,
        name: 'Estimator',
        dotnum: '169.267-038',
        m: '4',
        l: '       4',
        svp: '      7',
        wgcheck: '05.03'
    },
    {
        workgroup_id: 18,
        name: 'Laser Technician',
        dotnum: '019.261-034',
        m: '4',
        l: '       4',
        svp: '      7',
        wgcheck: '05.03'
    },
    {
        workgroup_id: 18,
        name: 'Drafter, Architectural',
        dotnum: '001.261-010',
        m: '4',
        l: '       4',
        svp: '      7',
        wgcheck: '05.03'
    },
    {
        workgroup_id: 18,
        name: 'Prod. Scheduler, Paperboard',
        dotnum: '221.162-010',
        m: '4',
        l: '4',
        svp: '6',
        wgcheck: '05.03'
    },
    {
        workgroup_id: 18,
        name: 'Solar-Energy-Sys. Designer',
        dotnum: '007.161-038',
        m: '4',
        l: '       4',
        svp: '      5',
        wgcheck: '05.03'
    },
    {
        workgroup_id: 18,
        name: 'Drafter, Automotive Design',
        dotnum: '017.281-026',
        m: '4',
        l: '       3',
        svp: '      7',
        wgcheck: '05.03'
    },
    {
        workgroup_id: 18,
        name: 'Access Coord., Cable TV',
        dotnum: '194.122-010',
        m: '3',
        l: '       4',
        svp: '      7',
        wgcheck: '05.03'
    },
    {
        workgroup_id: 18,
        name: 'Building Inspector',
        dotnum: '168.267-010',
        m: '3',
        l: '       4',
        svp: '      7',
        wgcheck: '05.03'
    },
    {
        workgroup_id: 18,
        name: 'Communications Coordinator',
        dotnum: '239.167-010',
        m: '3',
        l: '3',
        svp: '7',
        wgcheck: '05.03'
    },
    {
        workgroup_id: 18,
        name: 'Field-Map Editor',
        dotnum: '018.262-010',
        m: '3',
        l: '       3',
        svp: '      6',
        wgcheck: '05.03'
    },
    {
        workgroup_id: 19,
        name: 'Executive Pilot',
        dotnum: '196.263-030',
        m: '4',
        l: '       5',
        svp: '      7',
        wgcheck: '05.04'
    },
    {
        workgroup_id: 19,
        name: 'Helicopter Pilot',
        dotnum: '196.263-038',
        m: '4',
        l: '       4',
        svp: '      7',
        wgcheck: '05.04'
    },
    {
        workgroup_id: 19,
        name: 'Ferryboat Captain',
        dotnum: '197.163-010',
        m: '4',
        l: '       4',
        svp: '      7',
        wgcheck: '05.04'
    },
    {
        workgroup_id: 19,
        name: 'Instructor, Flying II',
        dotnum: '097.227-010',
        m: '4',
        l: '       3',
        svp: '      6',
        wgcheck: '05.04'
    },
    {
        workgroup_id: 20,
        name: 'Analyst, Food & Beverage',
        dotnum: '310.267-010',
        m: '4',
        l: '4',
        svp: '8',
        wgcheck: '05.05'
    },
    {
        workgroup_id: 20,
        name: 'Electronics Mechanic',
        dotnum: '828.261-022',
        m: '4',
        l: '4',
        svp: '7',
        wgcheck: '05.05'
    },
    {
        workgroup_id: 20,
        name: 'Maintenance Repairer, Indust.',
        dotnum: '899.261-014',
        m: '4',
        l: '3',
        svp: '8',
        wgcheck: '05.05'
    },
    {
        workgroup_id: 20,
        name: 'Electrician',
        dotnum: '824.261-010',
        m: '4',
        l: '3',
        svp: '7',
        wgcheck: '05.05'
    },
    {
        workgroup_id: 20,
        name: 'Maintenance Mechanic',
        dotnum: '638.281-014',
        m: '4',
        l: '3',
        svp: '7',
        wgcheck: '05.05'
    },
    {
        workgroup_id: 20,
        name: 'Fluid-Power Mechanic',
        dotnum: '600.281-010',
        m: '4',
        l: '       3',
        svp: '      7',
        wgcheck: '05.05'
    },
    {
        workgroup_id: 20,
        name: 'Microcomputer Support Spec.',
        dotnum: '039.264-010',
        m: '3',
        l: '4',
        svp: '7',
        wgcheck: '05.05'
    },
    {
        workgroup_id: 20,
        name: 'Data Communications Tech.',
        dotnum: '823.261-030',
        m: '3',
        l: '       4',
        svp: '      7',
        wgcheck: '05.05'
    },
    {
        workgroup_id: 20,
        name: 'Dental-Laboratory Tech.',
        dotnum: '712.381-018',
        m: '3',
        l: '       4',
        svp: '      7',
        wgcheck: '05.05'
    },
    {
        workgroup_id: 20,
        name: 'Carpenter',
        dotnum: '860.381-022',
        m: '3',
        l: '       3',
        svp: '      7',
        wgcheck: '05.05'
    },
    {
        workgroup_id: 20,
        name: 'Line Installer-Repairer',
        dotnum: '822.381-014',
        m: '3',
        l: '3',
        svp: '7',
        wgcheck: '05.05'
    },
    {
        workgroup_id: 20,
        name: 'Automobile-Body Repairer',
        dotnum: '807.381-010',
        m: '3',
        l: '3',
        svp: '7',
        wgcheck: '05.05'
    },
    {
        workgroup_id: 20,
        name: 'Dry-Wall Applicator',
        dotnum: '842.361-030',
        m: '3',
        l: '       3',
        svp: '      7',
        wgcheck: '05.05'
    },
    {
        workgroup_id: 20,
        name: 'Automobile Mechanic',
        dotnum: '620.261-010',
        m: '3',
        l: '       3',
        svp: '      7',
        wgcheck: '05.05'
    },
    {
        workgroup_id: 20,
        name: 'Cook',
        dotnum: '313.361-014',
        m: '3',
        l: '       3',
        svp: '      7',
        wgcheck: '05.05'
    },
    {
        workgroup_id: 20,
        name: 'Cement Mason',
        dotnum: '844.364-010',
        m: '3',
        l: '       2',
        svp: '      7',
        wgcheck: '05.05'
    },
    {
        workgroup_id: 20,
        name: 'Welder-Assembler',
        dotnum: '819.381-010',
        m: '3',
        l: '       2',
        svp: '      6',
        wgcheck: '05.05'
    },
    {
        workgroup_id: 20,
        name: 'Structural-Steel Worker',
        dotnum: '801.361-014',
        m: '2',
        l: '       3',
        svp: '      7',
        wgcheck: '05.05'
    },
    {
        workgroup_id: 20,
        name: 'Bricklayer',
        dotnum: '861.381-014',
        m: '2',
        l: '       2',
        svp: '      8',
        wgcheck: '05.05'
    },
    {
        workgroup_id: 20,
        name: 'Plumber',
        dotnum: '862.681-010',
        m: '2',
        l: '       2',
        svp: '      6',
        wgcheck: '05.05'
    },
    {
        workgroup_id: 20,
        name: 'Oil-Burner-Svcs./Installer',
        dotnum: '862.281-018',
        m: '1',
        l: '       2',
        svp: '      7',
        wgcheck: '05.05'
    },
    {
        workgroup_id: 21,
        name: 'Inspector, Heat. & Refrig.',
        dotnum: '168.167-046',
        m: '4',
        l: '       4',
        svp: '      7',
        wgcheck: '05.07'
    },
    {
        workgroup_id: 21,
        name: 'Equipment Inspector',
        dotnum: '822.261-014',
        m: '4',
        l: '       3',
        svp: '      8',
        wgcheck: '05.07'
    },
    {
        workgroup_id: 21,
        name: 'Bridge Inspector',
        dotnum: '869.287-010',
        m: '4',
        l: '       3',
        svp: '      7',
        wgcheck: '05.07'
    },
    {
        workgroup_id: 21,
        name: 'Elevator Examiner/Adjuster',
        dotnum: '825.261-014',
        m: '3',
        l: '       3',
        svp: '      8',
        wgcheck: '05.07'
    },
    {
        workgroup_id: 21,
        name: 'Shop Estimator',
        dotnum: '807.267-010',
        m: '3',
        l: '       3',
        svp: '      6',
        wgcheck: '05.07'
    },
    {
        workgroup_id: 21,
        name: 'Ultrasonic Tester',
        dotnum: '739.281-014',
        m: '3',
        l: '       3',
        svp: '      6',
        wgcheck: '05.07'
    },
    {
        workgroup_id: 21,
        name: 'Electric-Motor Analyst',
        dotnum: '721.261-010',
        m: '3',
        l: '       2',
        svp: '      7',
        wgcheck: '05.07'
    },
    {
        workgroup_id: 21,
        name: 'Carpenter Inspector',
        dotnum: '860.261-010',
        m: '2',
        l: '       3',
        svp: '      7',
        wgcheck: '05.07'
    },
    {
        workgroup_id: 21,
        name: 'Hull Inspector',
        dotnum: '806.264-010',
        m: '2',
        l: '       2',
        svp: '      8',
        wgcheck: '05.07'
    },
    {
        workgroup_id: 22,
        name: 'Tractor-Trailer Driver',
        dotnum: '904.383-010',
        m: '2',
        l: '       3',
        svp: '      4',
        wgcheck: '05.08'
    },
    {
        workgroup_id: 22,
        name: 'Truck Driver, Heavy',
        dotnum: '905.663-014',
        m: '2',
        l: '       2',
        svp: '      4',
        wgcheck: '05.08'
    },
    {
        workgroup_id: 22,
        name: 'Newspaper-Delivery Driver',
        dotnum: '292.363-010',
        m: '2',
        l: '       2',
        svp: '      4',
        wgcheck: '05.08'
    },
    {
        workgroup_id: 22,
        name: 'Truck Driver, Light',
        dotnum: '906.683-022',
        m: '2',
        l: '       2',
        svp: '      3',
        wgcheck: '05.08'
    },
    {
        workgroup_id: 22,
        name: 'Tank-Truck Driver',
        dotnum: '903.683-018',
        m: '1',
        l: '2',
        svp: '3',
        wgcheck: '05.08'
    },
    {
        workgroup_id: 22,
        name: 'Garbage Collector Driver',
        dotnum: '905.566-010',
        m: '1',
        l: '1',
        svp: '3',
        wgcheck: '05.08'
    },
    {
        workgroup_id: 22,
        name: 'Tow-Truck Operator',
        dotnum: '919.663-026',
        m: '1',
        l: '       2',
        svp: '      3',
        wgcheck: '05.08'
    },
    {
        workgroup_id: 22,
        name: 'Dump-Truck Driver',
        dotnum: '902.683-010',
        m: '1',
        l: '       1',
        svp: '      2',
        wgcheck: '05.08'
    },
    {
        workgroup_id: 23,
        name: 'Customer Svcs. Coordinator',
        dotnum: '221.167-026',
        m: '4',
        l: '       4',
        svp: '      6',
        wgcheck: '05.09'
    },
    {
        workgroup_id: 23,
        name: 'Industrial-Order Clerk',
        dotnum: '221.367-022',
        m: '3',
        l: '       4',
        svp: '      4',
        wgcheck: '05.09'
    },
    {
        workgroup_id: 23,
        name: 'Estimator, Printer',
        dotnum: '221.367-014',
        m: '3',
        l: '       3',
        svp: '      6',
        wgcheck: '05.09'
    },
    {
        workgroup_id: 23,
        name: 'Material Clerk',
        dotnum: '222.387-034',
        m: '3',
        l: '       3',
        svp: '      5',
        wgcheck: '05.09'
    },
    {
        workgroup_id: 23,
        name: 'Inventory Clerk',
        dotnum: '222.387-026',
        m: '3',
        l: '       3',
        svp: '      4',
        wgcheck: '05.09'
    },
    {
        workgroup_id: 23,
        name: 'Shipping & Receiving Clerk',
        dotnum: '222.387-050',
        m: '3',
        l: '       2',
        svp: '      5',
        wgcheck: '05.09'
    },
    {
        workgroup_id: 23,
        name: 'Engine Dispatcher',
        dotnum: '910.367-018',
        m: '2',
        l: '       3',
        svp: '      4',
        wgcheck: '05.09'
    },
    {
        workgroup_id: 23,
        name: 'Turbine Attendant',
        dotnum: '952.567-010',
        m: '2',
        l: '       3',
        svp: '      4',
        wgcheck: '05.09'
    },
    {
        workgroup_id: 23,
        name: 'Prod. Tech., Semicond. Proc.',
        dotnum: '590.384-014',
        m: '2',
        l: '       2',
        svp: '      5',
        wgcheck: '05.09'
    },
    {
        workgroup_id: 23,
        name: 'Parts-Order-&-Stock Clerk',
        dotnum: '249.367-058',
        m: '2',
        l: '       2',
        svp: '      5',
        wgcheck: '05.09'
    },
    {
        workgroup_id: 23,
        name: 'Stock Clerk',
        dotnum: '299.367-014',
        m: '2',
        l: '       2',
        svp: '      4',
        wgcheck: '05.09'
    },
    {
        workgroup_id: 23,
        name: 'Kitchen Clerk',
        dotnum: '222.587-022',
        m: '2',
        l: '       2',
        svp: '      4',
        wgcheck: '05.09'
    },
    {
        workgroup_id: 23,
        name: 'Laboratory Clerk',
        dotnum: '222.587-026',
        m: '2',
        l: '       2',
        svp: '      3',
        wgcheck: '05.09'
    },
    {
        workgroup_id: 23,
        name: 'Mailer',
        dotnum: '222.587-030',
        m: '2',
        l: '       2',
        svp: '      3',
        wgcheck: '05.09'
    },
    {
        workgroup_id: 23,
        name: 'Meter Reader',
        dotnum: '209.567-010',
        m: '2',
        l: '       2',
        svp: '      3',
        wgcheck: '05.09'
    },
    {
        workgroup_id: 23,
        name: 'Library Clerk, Talking Books',
        dotnum: '209.387-026',
        m: '1',
        l: '       3',
        svp: '      3',
        wgcheck: '05.09'
    },
    {
        workgroup_id: 23,
        name: 'Laundry Worker III',
        dotnum: '369.387-010',
        m: '1',
        l: '       2',
        svp: '      3',
        wgcheck: '05.09'
    },
    {
        workgroup_id: 23,
        name: 'Ticketer',
        dotnum: '229.587-018',
        m: '1',
        l: '       2',
        svp: '      2',
        wgcheck: '05.09'
    },
    {
        workgroup_id: 23,
        name: 'Booking Clerk',
        dotnum: '216.587-010',
        m: '1',
        l: '1',
        svp: '3',
        wgcheck: '05.09'
    },
    {
        workgroup_id: 23,
        name: 'Marker',
        dotnum: '209.587-034',
        m: '1',
        l: '       1',
        svp: '      2',
        wgcheck: '05.09'
    },
    {
        workgroup_id: 24,
        name: 'Swimming Pool Installer/Svc.',
        dotnum: '869.463-010',
        m: '4',
        l: '       4',
        svp: '      8',
        wgcheck: '05.10'
    },
    {
        workgroup_id: 24,
        name: 'Sound Controller',
        dotnum: '194.262-014',
        m: '4',
        l: '       3',
        svp: '      7',
        wgcheck: '05.10'
    },
    {
        workgroup_id: 24,
        name: 'Cable TV Installer',
        dotnum: '821.281-010',
        m: '4',
        l: '       3',
        svp: '      5',
        wgcheck: '05.10'
    },
    {
        workgroup_id: 24,
        name: 'Optician, Dispensing',
        dotnum: '299.361-010',
        m: '3',
        l: '       4',
        svp: '      7',
        wgcheck: '05.10'
    },
    {
        workgroup_id: 24,
        name: 'Maintenance Repairer, Bldg',
        dotnum: '899.381-010',
        m: '3',
        l: '3',
        svp: '7',
        wgcheck: '05.10'
    },
    {
        workgroup_id: 24,
        name: 'Conveyor-Maintenance Mech.',
        dotnum: '630.381-010',
        m: '3',
        l: '3',
        svp: '6',
        wgcheck: '05.10'
    },
    {
        workgroup_id: 24,
        name: 'Front-End Mechanic',
        dotnum: '620.281-038',
        m: '3',
        l: '       3',
        svp: '      6',
        wgcheck: '05.10'
    },
    {
        workgroup_id: 24,
        name: 'Construction Worker I',
        dotnum: '869.664-014',
        m: '3',
        l: '       3',
        svp: '      4',
        wgcheck: '05.10'
    },
    {
        workgroup_id: 24,
        name: 'Insulation Worker',
        dotnum: '863.364-014',
        m: '2',
        l: '       3',
        svp: '      6',
        wgcheck: '05.10'
    },
    {
        workgroup_id: 24,
        name: 'Salad Maker',
        dotnum: '317.384-010',
        m: '2',
        l: '3',
        svp: '5',
        wgcheck: '05.10'
    },
    {
        workgroup_id: 24,
        name: 'Medical-Equipment Repairer',
        dotnum: '639.281-022',
        m: '2',
        l: '       3',
        svp: '      5',
        wgcheck: '05.10'
    },
    {
        workgroup_id: 24,
        name: 'Roofer',
        dotnum: '866.381-010',
        m: '2',
        l: '       2',
        svp: '      7',
        wgcheck: '05.10'
    },
    {
        workgroup_id: 24,
        name: 'Baker',
        dotnum: '313.381-010',
        m: '2',
        l: '2',
        svp: '6',
        wgcheck: '05.10'
    },
    {
        workgroup_id: 24,
        name: 'Cook',
        dotnum: '315.361-010',
        m: '2',
        l: '       2',
        svp: '      6',
        wgcheck: '05.10'
    },
    {
        workgroup_id: 24,
        name: 'Used-Car Renovator',
        dotnum: '620.684-034',
        m: '2',
        l: '2',
        svp: '4',
        wgcheck: '05.10'
    },
    {
        workgroup_id: 24,
        name: 'Muffler Installer',
        dotnum: '807.664-010',
        m: '2',
        l: '       2',
        svp: '      4',
        wgcheck: '05.10'
    },
    {
        workgroup_id: 24,
        name: 'Furniture Assem. & Installer',
        dotnum: '739.684-082',
        m: '2',
        l: '       1',
        svp: '      4',
        wgcheck: '05.10'
    },
    {
        workgroup_id: 24,
        name: 'Butcher, Chicken & Fish',
        dotnum: '316.684-010',
        m: '2',
        l: '       1',
        svp: '      3',
        wgcheck: '05.10'
    },
    {
        workgroup_id: 24,
        name: 'Glass Installer',
        dotnum: '865.684-010',
        m: '1',
        l: '       2',
        svp: '      4',
        wgcheck: '05.10'
    },
    {
        workgroup_id: 24,
        name: 'Carpet-Layer Helper',
        dotnum: '864.687-010',
        m: '1',
        l: '       2',
        svp: '      3',
        wgcheck: '05.10'
    },
    {
        workgroup_id: 24,
        name: 'Photocomposing-Mach. Oper.',
        dotnum: '650.582-018',
        m: '1',
        l: '       1',
        svp: '      6',
        wgcheck: '05.10'
    },
    {
        workgroup_id: 24,
        name: 'Riveter, Pneumatic',
        dotnum: '800.684-014',
        m: '1',
        l: '       1',
        svp: '      4',
        wgcheck: '05.10'
    },
    {
        workgroup_id: 25,
        name: 'Well-Drill Operator',
        dotnum: '859.362-010',
        m: '3',
        l: '       3',
        svp: '      7',
        wgcheck: '05.11'
    },
    {
        workgroup_id: 25,
        name: 'Miner I',
        dotnum: '939.281-010',
        m: '3',
        l: '       2',
        svp: '      6',
        wgcheck: '05.11'
    },
    {
        workgroup_id: 25,
        name: 'Coal-Equipment Operator',
        dotnum: '921.683-022',
        m: '2',
        l: '       3',
        svp: '      4',
        wgcheck: '05.11'
    },
    {
        workgroup_id: 25,
        name: 'Overhead Crane Operator',
        dotnum: '921.663-010',
        m: '2',
        l: '       2',
        svp: '      5',
        wgcheck: '05.11'
    },
    {
        workgroup_id: 25,
        name: 'Rock-Drill Operator I',
        dotnum: '850.683-034',
        m: '2',
        l: '       2',
        svp: '      5',
        wgcheck: '05.11'
    },
    {
        workgroup_id: 25,
        name: 'Irrigation Sys. Installer',
        dotnum: '851.383-010',
        m: '2',
        l: '       2',
        svp: '      5',
        wgcheck: '05.11'
    },
    {
        workgroup_id: 25,
        name: 'Bulldozer Operator I',
        dotnum: '850.683-010',
        m: '2',
        l: '       2',
        svp: '      5',
        wgcheck: '05.11'
    },
    {
        workgroup_id: 25,
        name: 'Tractor Operator',
        dotnum: '929.683-014',
        m: '2',
        l: '2',
        svp: '3',
        wgcheck: '05.11'
    },
    {
        workgroup_id: 25,
        name: 'Curb-Machine Operator',
        dotnum: '853.683-010',
        m: '2',
        l: '       1',
        svp: '      4',
        wgcheck: '05.11'
    },
    {
        workgroup_id: 25,
        name: 'Operating Engineer',
        dotnum: '859.683-010',
        m: '1',
        l: '       2',
        svp: '      6',
        wgcheck: '05.11'
    },
    {
        workgroup_id: 25,
        name: 'Tamping-Machine Operator',
        dotnum: '869.683-018',
        m: '1',
        l: '       2',
        svp: '      5',
        wgcheck: '05.11'
    },
    {
        workgroup_id: 25,
        name: 'Asphalt-Paving Mach. Oper.',
        dotnum: '853.663-010',
        m: '1',
        l: '       1',
        svp: '      5',
        wgcheck: '05.11'
    },
    {
        workgroup_id: 25,
        name: 'Front-End Loader Operator',
        dotnum: '921.683-042',
        m: '1',
        l: '1',
        svp: '3',
        wgcheck: '05.11'
    },
    {
        workgroup_id: 25,
        name: 'Project-Crew Worker',
        dotnum: '891.687-018',
        m: '1',
        l: '       1',
        svp: '      3',
        wgcheck: '05.11'
    },
    {
        workgroup_id: 26,
        name: 'Street-Light Servicer Helper',
        dotnum: '824.664-010',
        m: '3',
        l: '2',
        svp: '4',
        wgcheck: '05.12'
    },
    {
        workgroup_id: 26,
        name: 'Maint. Worker, Municipal',
        dotnum: '899.684-046',
        m: '2',
        l: '       3',
        svp: '      5',
        wgcheck: '05.12'
    },
    {
        workgroup_id: 26,
        name: 'Janitor',
        dotnum: '382.664-010',
        m: '2',
        l: '       3',
        svp: '      3',
        wgcheck: '05.12'
    },
    {
        workgroup_id: 26,
        name: 'Prop Attendant',
        dotnum: '962.684-022',
        m: '2',
        l: '3',
        svp: '2',
        wgcheck: '05.12'
    },
    {
        workgroup_id: 26,
        name: 'Electrician Helper',
        dotnum: '829.684-022',
        m: '2',
        l: '       2',
        svp: '      3',
        wgcheck: '05.12'
    },
    {
        workgroup_id: 26,
        name: 'Currency Counter',
        dotnum: '217.485-010',
        m: '2',
        l: '       2',
        svp: '      3',
        wgcheck: '05.12'
    },
    {
        workgroup_id: 26,
        name: 'Food Assembler, Kitchen',
        dotnum: '319.484-010',
        m: '2',
        l: '       1',
        svp: '      3',
        wgcheck: '05.12'
    },
    {
        workgroup_id: 26,
        name: 'Deli Cutter-Slicer',
        dotnum: '316.684-014',
        m: '2',
        l: '       1',
        svp: '      2',
        wgcheck: '05.12'
    },
    {
        workgroup_id: 26,
        name: 'Roofer Applicator',
        dotnum: '866.684-010',
        m: '1',
        l: '       2',
        svp: '      6',
        wgcheck: '05.12'
    },
    {
        workgroup_id: 26,
        name: 'Pump-Servicer Helper',
        dotnum: '630.684-022',
        m: '1',
        l: '       2',
        svp: '      5',
        wgcheck: '05.12'
    },
    {
        workgroup_id: 26,
        name: 'Maint.-Mechanic Helper',
        dotnum: '638.684-018',
        m: '1',
        l: '       2',
        svp: '      4',
        wgcheck: '05.12'
    },
    {
        workgroup_id: 26,
        name: 'Auto-Mechanic Helper',
        dotnum: '620.684-014',
        m: '1',
        l: '       2',
        svp: '      3',
        wgcheck: '05.12'
    },
    {
        workgroup_id: 26,
        name: 'Refrig.-Mechanic Helper',
        dotnum: '637.687-014',
        m: '1',
        l: '       2',
        svp: '      2',
        wgcheck: '05.12'
    },
    {
        workgroup_id: 26,
        name: 'Tank Cleaner',
        dotnum: '891.687-022',
        m: '1',
        l: '1',
        svp: '3',
        wgcheck: '05.12'
    },
    {
        workgroup_id: 26,
        name: 'Material Handler',
        dotnum: '929.687-030',
        m: '1',
        l: '       1',
        svp: '      3',
        wgcheck: '05.12'
    },
    {
        workgroup_id: 26,
        name: 'Garage Servicer, Indust.',
        dotnum: '915.687-014',
        m: '1',
        l: '       1',
        svp: '      3',
        wgcheck: '05.12'
    },
    {
        workgroup_id: 26,
        name: 'Auto Detailer',
        dotnum: '915.687-034',
        m: '1',
        l: '       1',
        svp: '      2',
        wgcheck: '05.12'
    },
    {
        workgroup_id: 26,
        name: 'Construction Worker II',
        dotnum: '869.687-026',
        m: '1',
        l: '       1',
        svp: '      2',
        wgcheck: '05.12'
    },
    {
        workgroup_id: 26,
        name: 'Truck-Driver Helper',
        dotnum: '905.687-010',
        m: '1',
        l: '1',
        svp: '2',
        wgcheck: '05.12'
    },
    {
        workgroup_id: 26,
        name: 'Laundry Worker I',
        dotnum: '361.684-014',
        m: '1',
        l: '1',
        svp: '2',
        wgcheck: '05.12'
    },
    {
        workgroup_id: 26,
        name: 'Wharf Worker',
        dotnum: '921.667-026',
        m: '1',
        l: '1',
        svp: '2',
        wgcheck: '05.12'
    },
    {
        workgroup_id: 26,
        name: 'Cleaner, Commerc./Instit.',
        dotnum: '381.687-014',
        m: '1',
        l: '       1',
        svp: '      2',
        wgcheck: '05.12'
    },
    {
        workgroup_id: 26,
        name: 'Kitchen Helper',
        dotnum: '318.687-010',
        m: '1',
        l: '       1',
        svp: '      2',
        wgcheck: '05.12'
    },
    {
        workgroup_id: 27,
        name: 'Electronic-Prod.-Line Maint. Mech.',
        dotnum: '629.261-022',
        m: '4',
        l: '4',
        svp: '7',
        wgcheck: '06.01'
    },
    {
        workgroup_id: 27,
        name: 'Engine Tester',
        dotnum: '621.261-014',
        m: '4',
        l: '       4',
        svp: '      7',
        wgcheck: '06.01'
    },
    {
        workgroup_id: 27,
        name: 'Electronics Inspector',
        dotnum: '726.381-010',
        m: '4',
        l: '       4',
        svp: '      6',
        wgcheck: '06.01'
    },
    {
        workgroup_id: 27,
        name: 'Electronics Tester',
        dotnum: '726.261-018',
        m: '4',
        l: '       3',
        svp: '      7',
        wgcheck: '06.01'
    },
    {
        workgroup_id: 27,
        name: 'Num. Cont. Mach. Setup. Op.',
        dotnum: '609.360-010',
        m: '4',
        l: '       3',
        svp: '      6',
        wgcheck: '06.01'
    },
    {
        workgroup_id: 27,
        name: 'Int.-Combust.-Eng. Inspec.',
        dotnum: '806.261-010',
        m: '3',
        l: '       4',
        svp: '      7',
        wgcheck: '06.01'
    },
    {
        workgroup_id: 27,
        name: 'Inspector, Electromech.',
        dotnum: '729.361-010',
        m: '3',
        l: '       4',
        svp: '      7',
        wgcheck: '06.01'
    },
    {
        workgroup_id: 27,
        name: 'Packaging Technician',
        dotnum: '739.281-010',
        m: '3',
        l: '       3',
        svp: '      6',
        wgcheck: '06.01'
    },
    {
        workgroup_id: 27,
        name: 'Assem. & Tester, Electron.',
        dotnum: '710.281-010',
        m: '3',
        l: '       3',
        svp: '      6',
        wgcheck: '06.01'
    },
    {
        workgroup_id: 27,
        name: 'Assembly Technician',
        dotnum: '633.261-010',
        m: '3',
        l: '       3',
        svp: '      6',
        wgcheck: '06.01'
    },
    {
        workgroup_id: 27,
        name: 'Machine Operator I',
        dotnum: '616.380-018',
        m: '3',
        l: '       3',
        svp: '      6',
        wgcheck: '06.01'
    },
    {
        workgroup_id: 27,
        name: 'Installer, Interior Assemblies',
        dotnum: '806.381-078',
        m: '3',
        l: '3',
        svp: '6',
        wgcheck: '06.01'
    },
    {
        workgroup_id: 27,
        name: 'Router Setup Op., Num. Cont.',
        dotnum: '605.360-010',
        m: '3',
        l: '       3',
        svp: '      6',
        wgcheck: '06.01'
    },
    {
        workgroup_id: 27,
        name: 'Lathe Op., Numer. Control',
        dotnum: '604.362-010',
        m: '3',
        l: '       3',
        svp: '      6',
        wgcheck: '06.01'
    },
    {
        workgroup_id: 27,
        name: 'Elec.-Motor-Cont Assembler',
        dotnum: '721.381-014',
        m: '3',
        l: '       2',
        svp: '      6',
        wgcheck: '06.01'
    },
    {
        workgroup_id: 27,
        name: 'Multi-Oper.-Mach. Operator',
        dotnum: '612.462-010',
        m: '3',
        l: '       2',
        svp: '      6',
        wgcheck: '06.01'
    },
    {
        workgroup_id: 27,
        name: 'Sect. Lead., Screen Print.',
        dotnum: '652.260-010',
        m: '2',
        l: '       3',
        svp: '      7',
        wgcheck: '06.01'
    },
    {
        workgroup_id: 27,
        name: 'Final Assembler',
        dotnum: '706.381-018',
        m: '2',
        l: '       3',
        svp: '      6',
        wgcheck: '06.01'
    },
    {
        workgroup_id: 27,
        name: 'Grp. Lead., Semicond. Test.',
        dotnum: '726.362-010',
        m: '2',
        l: '       2',
        svp: '      7',
        wgcheck: '06.01'
    },
    {
        workgroup_id: 27,
        name: 'Mach. Setter-&-Repairer',
        dotnum: '690.380-014',
        m: '2',
        l: '       2',
        svp: '      4',
        wgcheck: '06.01'
    },
    {
        workgroup_id: 27,
        name: 'Bench Hand',
        dotnum: '735.381-010',
        m: '2',
        l: '       1',
        svp: '      6',
        wgcheck: '06.01'
    },
    {
        workgroup_id: 27,
        name: 'Assembler, Gold Frame',
        dotnum: '713.384-010',
        m: '1',
        l: '       2',
        svp: '      2',
        wgcheck: '06.01'
    },
    {
        workgroup_id: 28,
        name: 'Welding-Mach. Oper., Arc',
        dotnum: '810.382-010',
        m: '4',
        l: '       3',
        svp: '      6',
        wgcheck: '06.02'
    },
    {
        workgroup_id: 28,
        name: 'Precision-Lens Grinder',
        dotnum: '716.382-018',
        m: '3',
        l: '       4',
        svp: '      7',
        wgcheck: '06.02'
    },
    {
        workgroup_id: 28,
        name: 'Candy Maker',
        dotnum: '529.361-014',
        m: '3',
        l: '       4',
        svp: '      7',
        wgcheck: '06.02'
    },
    {
        workgroup_id: 28,
        name: 'Num. Control Mach. Oper.',
        dotnum: '609.362-010',
        m: '3',
        l: '       3',
        svp: '      5',
        wgcheck: '06.02'
    },
    {
        workgroup_id: 28,
        name: 'Boring-Machine Operator',
        dotnum: '666.382-010',
        m: '3',
        l: '       2',
        svp: '      4',
        wgcheck: '06.02'
    },
    {
        workgroup_id: 28,
        name: 'Collating-Mach. Operator',
        dotnum: '653.382-014',
        m: '2',
        l: '       3',
        svp: '      4',
        wgcheck: '06.02'
    },
    {
        workgroup_id: 28,
        name: 'Painter, Electrostatic',
        dotnum: '599.682-010',
        m: '2',
        l: '       3',
        svp: '      4',
        wgcheck: '06.02'
    },
    {
        workgroup_id: 28,
        name: 'Dry Cleaner',
        dotnum: '362.382-014',
        m: '2',
        l: '2',
        svp: '5',
        wgcheck: '06.02'
    },
    {
        workgroup_id: 28,
        name: 'Folding-Machine Operator',
        dotnum: '653.382-010',
        m: '2',
        l: '       2',
        svp: '      5',
        wgcheck: '06.02'
    },
    {
        workgroup_id: 28,
        name: 'Assembler, Unit',
        dotnum: '809.681-010',
        m: '2',
        l: '2',
        svp: '4',
        wgcheck: '06.02'
    },
    {
        workgroup_id: 28,
        name: 'Capsule-Filling-Mach. Oper.',
        dotnum: '559.682-010',
        m: '2',
        l: '2',
        svp: '4',
        wgcheck: '06.02'
    },
    {
        workgroup_id: 28,
        name: 'Fence-Making Mach. Oper.',
        dotnum: '616.582-010',
        m: '2',
        l: '       1',
        svp: '      4',
        wgcheck: '06.02'
    },
    {
        workgroup_id: 28,
        name: 'Fiberglass-Mach. Oper.',
        dotnum: '574.682-010',
        m: '2',
        l: '       1',
        svp: '      4',
        wgcheck: '06.02'
    },
    {
        workgroup_id: 28,
        name: 'Printer, Plastic',
        dotnum: '651.382-026',
        m: '1',
        l: '       2',
        svp: '      5',
        wgcheck: '06.02'
    },
    {
        workgroup_id: 28,
        name: 'Electronics Assembler',
        dotnum: '726.684-018',
        m: '1',
        l: '       2',
        svp: '      4',
        wgcheck: '06.02'
    },
    {
        workgroup_id: 28,
        name: 'Vending-Mach. Assembler',
        dotnum: '706.684-102',
        m: '1',
        l: '       2',
        svp: '      2',
        wgcheck: '06.02'
    },
    {
        workgroup_id: 28,
        name: 'Nailing-Mach. Operator',
        dotnum: '669.682-058',
        m: '1',
        l: '       1',
        svp: '      4',
        wgcheck: '06.02'
    },
    {
        workgroup_id: 28,
        name: 'Doughnut Maker',
        dotnum: '526.684-010',
        m: '1',
        l: '       1',
        svp: '      4',
        wgcheck: '06.02'
    },
    {
        workgroup_id: 28,
        name: 'Wire Harness Assembler',
        dotnum: '728.684-010',
        m: '1',
        l: '       1',
        svp: '      3',
        wgcheck: '06.02'
    },
    {
        workgroup_id: 28,
        name: 'Arbor-Press Operator I',
        dotnum: '616.682-010',
        m: '1',
        l: '       1',
        svp: '      3',
        wgcheck: '06.02'
    },
    {
        workgroup_id: 29,
        name: 'Fluoroscope Operator',
        dotnum: '502.382-014',
        m: '3',
        l: '       3',
        svp: '      5',
        wgcheck: '06.03'
    },
    {
        workgroup_id: 29,
        name: 'Electronics Tester',
        dotnum: '726.684-026',
        m: '3',
        l: '       3',
        svp: '      3',
        wgcheck: '06.03'
    },
    {
        workgroup_id: 29,
        name: 'Inspector, Plating',
        dotnum: '500.287-010',
        m: '3',
        l: '       3',
        svp: '      3',
        wgcheck: '06.03'
    },
    {
        workgroup_id: 29,
        name: 'Quality-Control Tech.',
        dotnum: '529.387-030',
        m: '2',
        l: '       3',
        svp: '      4',
        wgcheck: '06.03'
    },
    {
        workgroup_id: 29,
        name: 'Inspector',
        dotnum: '729.387-022',
        m: '2',
        l: '       2',
        svp: '      4',
        wgcheck: '06.03'
    },
    {
        workgroup_id: 29,
        name: 'Electronics Inspector',
        dotnum: '726.684-022',
        m: '2',
        l: '       2',
        svp: '      3',
        wgcheck: '06.03'
    },
    {
        workgroup_id: 29,
        name: 'Sorter',
        dotnum: '706.587-014',
        m: '2',
        l: '       2',
        svp: '      3',
        wgcheck: '06.03'
    },
    {
        workgroup_id: 29,
        name: 'Grain Receiver',
        dotnum: '921.365-010',
        m: '2',
        l: '       1',
        svp: '      2',
        wgcheck: '06.03'
    },
    {
        workgroup_id: 29,
        name: 'Inspect., Publications',
        dotnum: '653.667-010',
        m: '1',
        l: '       2',
        svp: '      5',
        wgcheck: '06.03'
    },
    {
        workgroup_id: 29,
        name: 'Paint-Spray Inspector',
        dotnum: '741.687-010',
        m: '1',
        l: '       2',
        svp: '      2',
        wgcheck: '06.03'
    },
    {
        workgroup_id: 29,
        name: 'Inspector & Hand Packager',
        dotnum: '559.687-074',
        m: '1',
        l: '       2',
        svp: '      2',
        wgcheck: '06.03'
    },
    {
        workgroup_id: 29,
        name: 'Classifier',
        dotnum: '361.687-014',
        m: '1',
        l: '       2',
        svp: '      2',
        wgcheck: '06.03'
    },
    {
        workgroup_id: 29,
        name: 'Lumber Sorter',
        dotnum: '922.687-074',
        m: '1',
        l: '       1',
        svp: '      2',
        wgcheck: '06.03'
    },
    {
        workgroup_id: 29,
        name: 'X-Ray Inspector',
        dotnum: '529.685-274',
        m: '1',
        l: '       1',
        svp: '      2',
        wgcheck: '06.03'
    },
    {
        workgroup_id: 30,
        name: 'Electronics Utility Worker',
        dotnum: '726.364-018',
        m: '2',
        l: '       3',
        svp: '      5',
        wgcheck: '06.04'
    },
    {
        workgroup_id: 30,
        name: 'Mailing-Machine Operator',
        dotnum: '208.462-010',
        m: '2',
        l: '       3',
        svp: '      5',
        wgcheck: '06.04'
    },
    {
        workgroup_id: 30,
        name: 'Programming Equip. Oper.',
        dotnum: '726.685-062',
        m: '2',
        l: '       3',
        svp: '      3',
        wgcheck: '06.04'
    },
    {
        workgroup_id: 30,
        name: 'Washer, Machine',
        dotnum: '361.665-010',
        m: '2',
        l: '2',
        svp: '4',
        wgcheck: '06.04'
    },
    {
        workgroup_id: 30,
        name: 'Production Machine Tender',
        dotnum: '609.685.018',
        m: '2',
        l: '       2',
        svp: '      3',
        wgcheck: '06.04'
    },
    {
        workgroup_id: 30,
        name: 'Bander, Hand',
        dotnum: '929.687-058',
        m: '2',
        l: '       2',
        svp: '      2',
        wgcheck: '06.04'
    },
    {
        workgroup_id: 30,
        name: 'Welder, Gun',
        dotnum: '810.664-010',
        m: '2',
        l: '       2',
        svp: '      2',
        wgcheck: '06.04'
    },
    {
        workgroup_id: 30,
        name: 'Silk-Screen Printer, Mach.',
        dotnum: '979.685-010',
        m: '1',
        l: '       2',
        svp: '      3',
        wgcheck: '06.04'
    },
    {
        workgroup_id: 30,
        name: 'Coin-Machine Assembler',
        dotnum: '731.684-010',
        m: '1',
        l: '       2',
        svp: '      3',
        wgcheck: '06.04'
    },
    {
        workgroup_id: 30,
        name: 'Equipment Cleaner',
        dotnum: '599.684-010',
        m: '1',
        l: '2',
        svp: '2',
        wgcheck: '06.04'
    },
    {
        workgroup_id: 30,
        name: 'Machine Operator II',
        dotnum: '619.685-062',
        m: '1',
        l: '       2',
        svp: '      3',
        wgcheck: '06.04'
    },
    {
        workgroup_id: 30,
        name: 'Electronics Worker',
        dotnum: '726.687-010',
        m: '1',
        l: '       2',
        svp: '      2',
        wgcheck: '06.04'
    },
    {
        workgroup_id: 30,
        name: 'Industrial-Truck Operator',
        dotnum: '921.683-050',
        m: '1',
        l: '1',
        svp: '3',
        wgcheck: '06.04'
    },
    {
        workgroup_id: 30,
        name: 'Stamping-Press Operator',
        dotnum: '652.682-030',
        m: '1',
        l: '       1',
        svp: '      3',
        wgcheck: '06.04'
    },
    {
        workgroup_id: 30,
        name: 'Packager, Hand',
        dotnum: '920.587-018',
        m: '1',
        l: '       1',
        svp: '      2',
        wgcheck: '06.04'
    },
    {
        workgroup_id: 30,
        name: 'Freezing-Room Worker',
        dotnum: '523.687-022',
        m: '1',
        l: '1',
        svp: '2',
        wgcheck: '06.04'
    },
    {
        workgroup_id: 30,
        name: 'Bind.-Mach. Feed-Offbearer',
        dotnum: '653.686-026',
        m: '1',
        l: '       1',
        svp: '      2',
        wgcheck: '06.04'
    },
    {
        workgroup_id: 30,
        name: 'Inject.-Mold.-Mach. Tender',
        dotnum: '556.685-038',
        m: '1',
        l: '       1',
        svp: '      2',
        wgcheck: '06.04'
    },
    {
        workgroup_id: 30,
        name: 'Rack-Room Worker',
        dotnum: '920.665-014',
        m: '1',
        l: '1',
        svp: '2',
        wgcheck: '06.04'
    },
    {
        workgroup_id: 30,
        name: 'Packager, Machine',
        dotnum: '920.685-078',
        m: '1',
        l: '1',
        svp: '2',
        wgcheck: '06.04'
    },
    {
        workgroup_id: 30,
        name: 'Poultry-Dressing Worker',
        dotnum: '545.687-082',
        m: '1',
        l: '1',
        svp: '2',
        wgcheck: '06.04'
    },
    {
        workgroup_id: 30,
        name: 'Butcher, Fish',
        dotnum: '525.684-014',
        m: '1',
        l: '1',
        svp: '2',
        wgcheck: '06.04'
    },
    {
        workgroup_id: 30,
        name: 'Trimmer, Meat',
        dotnum: '525.684-054',
        m: '1',
        l: '1',
        svp: '2',
        wgcheck: '06.04'
    },
    {
        workgroup_id: 30,
        name: 'Molder, Meat',
        dotnum: '520.685-174',
        m: '1',
        l: '1',
        svp: '2',
        wgcheck: '06.04'
    },
    {
        workgroup_id: 30,
        name: 'Fruit-Grader Operator',
        dotnum: '529.665-010',
        m: '1',
        l: '1',
        svp: '2',
        wgcheck: '06.04'
    },
    {
        workgroup_id: 30,
        name: 'Bakery Worker, Conveyor',
        dotnum: '524.687-022',
        m: '1',
        l: '       1',
        svp: '      2',
        wgcheck: '06.04'
    },
    {
        workgroup_id: 31,
        name: 'Credit Counselor',
        dotnum: '160.207-010',
        m: '5',
        l: '       5',
        svp: '      7',
        wgcheck: '07.01'
    },
    {
        workgroup_id: 31,
        name: 'Retirement Officer',
        dotnum: '166.267-030',
        m: '5',
        l: '4',
        svp: '7',
        wgcheck: '07.01'
    },
    {
        workgroup_id: 31,
        name: 'Administrative Secretary',
        dotnum: '169.167-014',
        m: '4',
        l: '       5',
        svp: '      8',
        wgcheck: '07.01'
    },
    {
        workgroup_id: 31,
        name: 'Securities Clerk',
        dotnum: '219.362-054',
        m: '4',
        l: '       3',
        svp: '      5',
        wgcheck: '07.01'
    },
    {
        workgroup_id: 31,
        name: 'Title Examiner',
        dotnum: '119.287-010',
        m: '3',
        l: '       5',
        svp: '      7',
        wgcheck: '07.01'
    },
    {
        workgroup_id: 31,
        name: 'Credit Analyst',
        dotnum: '241.267-022',
        m: '3',
        l: '       4',
        svp: '      7',
        wgcheck: '07.01'
    },
    {
        workgroup_id: 31,
        name: 'Manager, Office',
        dotnum: '169.167-034',
        m: '3',
        l: '       4',
        svp: '      7',
        wgcheck: '07.01'
    },
    {
        workgroup_id: 31,
        name: 'Secretary',
        dotnum: '201.362-030',
        m: '3',
        l: '       4',
        svp: '      6',
        wgcheck: '07.01'
    },
    {
        workgroup_id: 31,
        name: 'Medical Secretary',
        dotnum: '201.362-014',
        m: '3',
        l: '       4',
        svp: '      6',
        wgcheck: '07.01'
    },
    {
        workgroup_id: 31,
        name: 'Hospital-Insurance Rep.',
        dotnum: '166.267-014',
        m: '3',
        l: '       4',
        svp: '      6',
        wgcheck: '07.01'
    },
    {
        workgroup_id: 31,
        name: 'Caseworker',
        dotnum: '169.262-010',
        m: '3',
        l: '       4',
        svp: '      5',
        wgcheck: '07.01'
    },
    {
        workgroup_id: 31,
        name: 'Procurement Clerk',
        dotnum: '249.367-066',
        m: '3',
        l: '       3',
        svp: '      4',
        wgcheck: '07.01'
    },
    {
        workgroup_id: 31,
        name: 'Underwriting Clerk',
        dotnum: '219.367-038',
        m: '3',
        l: '       3',
        svp: '      4',
        wgcheck: '07.01'
    },
    {
        workgroup_id: 31,
        name: 'Contract Clerk',
        dotnum: '119.267-018',
        m: '2',
        l: '       5',
        svp: '      7',
        wgcheck: '07.01'
    },
    {
        workgroup_id: 31,
        name: 'Court Clerk',
        dotnum: '243.362-010',
        m: '2',
        l: '       4',
        svp: '      6',
        wgcheck: '07.01'
    },
    {
        workgroup_id: 31,
        name: 'Legal Secretary',
        dotnum: '201.362-010',
        m: '2',
        l: '       4',
        svp: '      6',
        wgcheck: '07.01'
    },
    {
        workgroup_id: 31,
        name: 'Test Technician',
        dotnum: '249.367-078',
        m: '2',
        l: '       3',
        svp: '      4',
        wgcheck: '07.01'
    },
    {
        workgroup_id: 31,
        name: 'Satellite-Instruc. Facil.',
        dotnum: '249.367-086',
        m: '2',
        l: '       3',
        svp: '      3',
        wgcheck: '07.01'
    },
    {
        workgroup_id: 31,
        name: 'Agent-Contract Clerk',
        dotnum: '241.267-010',
        m: '1',
        l: '       4',
        svp: '      5',
        wgcheck: '07.01'
    },
    {
        workgroup_id: 32,
        name: 'Electr. Funds Trans.Coord.',
        dotnum: '216.362-038',
        m: '4',
        l: '       4',
        svp: '      7',
        wgcheck: '07.02'
    },
    {
        workgroup_id: 32,
        name: 'Audit Clerk',
        dotnum: '210.382-010',
        m: '4',
        l: '       3',
        svp: '      7',
        wgcheck: '07.02'
    },
    {
        workgroup_id: 32,
        name: 'General-Ledger Bookkeeper',
        dotnum: '210.382-046',
        m: '4',
        l: '       3',
        svp: '      5',
        wgcheck: '07.02'
    },
    {
        workgroup_id: 32,
        name: 'Tax Preparer',
        dotnum: '219.362-070',
        m: '4',
        l: '       3',
        svp: '      4',
        wgcheck: '07.02'
    },
    {
        workgroup_id: 32,
        name: 'Claim Examiner',
        dotnum: '168.267-014',
        m: '3',
        l: '       4',
        svp: '      7',
        wgcheck: '07.02'
    },
    {
        workgroup_id: 32,
        name: 'Insurance Clerk',
        dotnum: '214.362-022',
        m: '3',
        l: '       4',
        svp: '      5',
        wgcheck: '07.02'
    },
    {
        workgroup_id: 32,
        name: 'Account-Information Clerk',
        dotnum: '210.367-010',
        m: '3',
        l: '       3',
        svp: '      6',
        wgcheck: '07.02'
    },
    {
        workgroup_id: 32,
        name: 'Accounting Clerk',
        dotnum: '216.482-010',
        m: '3',
        l: '       3',
        svp: '      5',
        wgcheck: '07.02'
    },
    {
        workgroup_id: 32,
        name: 'Invoice-Control Clerk',
        dotnum: '214.362-026',
        m: '3',
        l: '3',
        svp: '4',
        wgcheck: '07.02'
    },
    {
        workgroup_id: 32,
        name: 'Billing Clerk',
        dotnum: '214.362-042',
        m: '3',
        l: '3',
        svp: '4',
        wgcheck: '07.02'
    },
    {
        workgroup_id: 32,
        name: 'Payroll Clerk',
        dotnum: '215.382-014',
        m: '3',
        l: '       3',
        svp: '      4',
        wgcheck: '07.02'
    },
    {
        workgroup_id: 32,
        name: 'Credit-Card Clerk',
        dotnum: '210.382-038',
        m: '3',
        l: '       2',
        svp: '      3',
        wgcheck: '07.02'
    },
    {
        workgroup_id: 32,
        name: 'Medical-Voucher Clerk',
        dotnum: '214.482-018',
        m: '2',
        l: '       3',
        svp: '      3',
        wgcheck: '07.02'
    },
    {
        workgroup_id: 32,
        name: 'Advertising Clerk',
        dotnum: '247.387-010',
        m: '2',
        l: '       2',
        svp: '      4',
        wgcheck: '07.02'
    },
    {
        workgroup_id: 32,
        name: 'Tax Clerk',
        dotnum: '219.487-010',
        m: '2',
        l: '       2',
        svp: '      3',
        wgcheck: '07.02'
    },
    {
        workgroup_id: 33,
        name: 'Ticket Agent',
        dotnum: '238.367-026',
        m: '3',
        l: '       3',
        svp: '      5',
        wgcheck: '07.03'
    },
    {
        workgroup_id: 33,
        name: 'Cashier I',
        dotnum: '211.362-010',
        m: '3',
        l: '3',
        svp: '5',
        wgcheck: '07.03'
    },
    {
        workgroup_id: 33,
        name: 'Teller',
        dotnum: '211.362-018',
        m: '3',
        l: '       3',
        svp: '      5',
        wgcheck: '07.03'
    },
    {
        workgroup_id: 33,
        name: 'Post-Office Clerk',
        dotnum: '243.367-014',
        m: '3',
        l: '       3',
        svp: '      4',
        wgcheck: '07.03'
    },
    {
        workgroup_id: 33,
        name: 'Layaway Clerk',
        dotnum: '299.467-010',
        m: '3',
        l: '       3',
        svp: '      3',
        wgcheck: '07.03'
    },
    {
        workgroup_id: 33,
        name: 'Cashier-Checker',
        dotnum: '211.462-014',
        m: '2',
        l: '       2',
        svp: '      3',
        wgcheck: '07.03'
    },
    {
        workgroup_id: 33,
        name: 'Cashier II',
        dotnum: '211.462-010',
        m: '2',
        l: '       2',
        svp: '      2',
        wgcheck: '07.03'
    },
    {
        workgroup_id: 33,
        name: 'Toll Collector',
        dotnum: '211.462-038',
        m: '2',
        l: '       2',
        svp: '      2',
        wgcheck: '07.03'
    },
    {
        workgroup_id: 33,
        name: 'Change Person',
        dotnum: '211.467-034',
        m: '2',
        l: '       1',
        svp: '      2',
        wgcheck: '07.03'
    },
    {
        workgroup_id: 34,
        name: 'Collection Clerk',
        dotnum: '241.357-010',
        m: '3',
        l: '4',
        svp: '5',
        wgcheck: '07.04'
    },
    {
        workgroup_id: 34,
        name: 'Credit Clerk',
        dotnum: '205.367-022',
        m: '3',
        l: '       4',
        svp: '      4',
        wgcheck: '07.04'
    },
    {
        workgroup_id: 34,
        name: 'Loan Interviewer, Mortg.',
        dotnum: '241.367-018',
        m: '3',
        l: '       3',
        svp: '      6',
        wgcheck: '07.04'
    },
    {
        workgroup_id: 34,
        name: 'Hotel Clerk',
        dotnum: '238.367-038',
        m: '3',
        l: '       3',
        svp: '      4',
        wgcheck: '07.04'
    },
    {
        workgroup_id: 34,
        name: 'Policyholder-Info. Clerk',
        dotnum: '249.262-010',
        m: '2',
        l: '       4',
        svp: '      6',
        wgcheck: '07.04'
    },
    {
        workgroup_id: 34,
        name: 'Service Observer',
        dotnum: '239.367-026',
        m: '2',
        l: '4',
        svp: '4',
        wgcheck: '07.04'
    },
    {
        workgroup_id: 34,
        name: 'Admitting Officer',
        dotnum: '205.162-010',
        m: '2',
        l: '3',
        svp: '7',
        wgcheck: '07.04'
    },
    {
        workgroup_id: 34,
        name: 'Customer-Service Rep.',
        dotnum: '239.362-014',
        m: '2',
        l: '       3',
        svp: '      5',
        wgcheck: '07.04'
    },
    {
        workgroup_id: 34,
        name: 'Protective-Signal Operator',
        dotnum: '379.362-014',
        m: '2',
        l: '3',
        svp: '5',
        wgcheck: '07.04'
    },
    {
        workgroup_id: 34,
        name: 'Receptionist',
        dotnum: '237.367-038',
        m: '2',
        l: '       3',
        svp: '      4',
        wgcheck: '07.04'
    },
    {
        workgroup_id: 34,
        name: 'Hospital-Admitting Clerk',
        dotnum: '205.362-018',
        m: '2',
        l: '       3',
        svp: '      4',
        wgcheck: '07.04'
    },
    {
        workgroup_id: 34,
        name: 'Telephone Operator',
        dotnum: '235.662-022',
        m: '2',
        l: '       3',
        svp: '      3',
        wgcheck: '07.04'
    },
    {
        workgroup_id: 34,
        name: 'Tel.-Answering-Serv. Oper.',
        dotnum: '235.662-026',
        m: '2',
        l: '       3',
        svp: '      3',
        wgcheck: '07.04'
    },
    {
        workgroup_id: 34,
        name: 'Service Clerk',
        dotnum: '221.367-070',
        m: '2',
        l: '       2',
        svp: '      4',
        wgcheck: '07.04'
    },
    {
        workgroup_id: 34,
        name: 'Rehabilitation Clerk',
        dotnum: '205.367-046',
        m: '2',
        l: '       2',
        svp: '      4',
        wgcheck: '07.04'
    },
    {
        workgroup_id: 34,
        name: 'Registration Clerk',
        dotnum: '249.365-010',
        m: '1',
        l: '       3',
        svp: '      5',
        wgcheck: '07.04'
    },
    {
        workgroup_id: 34,
        name: 'Survey Worker',
        dotnum: '205.367-054',
        m: '1',
        l: '       2',
        svp: '      2',
        wgcheck: '07.04'
    },
    {
        workgroup_id: 35,
        name: 'Property-Assessm\'t Monitor',
        dotnum: '241.367-042',
        m: '4',
        l: '       4',
        svp: '      3',
        wgcheck: '07.05'
    },
    {
        workgroup_id: 35,
        name: 'Travel Counselor, Auto Club',
        dotnum: '238.167-014',
        m: '4',
        l: '       3',
        svp: '      5',
        wgcheck: '07.05'
    },
    {
        workgroup_id: 35,
        name: 'Medical Record Technician',
        dotnum: '079.362-014',
        m: '3',
        l: '       4',
        svp: '      6',
        wgcheck: '07.05'
    },
    {
        workgroup_id: 35,
        name: 'Customer-Complaint Clerk',
        dotnum: '241.367-014',
        m: '3',
        l: '       4',
        svp: '      5',
        wgcheck: '07.05'
    },
    {
        workgroup_id: 35,
        name: 'Police Clerk',
        dotnum: '375.362-010',
        m: '3',
        l: '       3',
        svp: '      6',
        wgcheck: '07.05'
    },
    {
        workgroup_id: 35,
        name: 'Mortgage Loan Processor',
        dotnum: '249.362-022',
        m: '3',
        l: '       3',
        svp: '      5',
        wgcheck: '07.05'
    },
    {
        workgroup_id: 35,
        name: 'Insurance Clerk',
        dotnum: '219.367-014',
        m: '3',
        l: '3',
        svp: '4',
        wgcheck: '07.05'
    },
    {
        workgroup_id: 35,
        name: 'Ref. Clerk, Temp. Agency',
        dotnum: '205.367-062',
        m: '3',
        l: '       3',
        svp: '      3',
        wgcheck: '07.05'
    },
    {
        workgroup_id: 35,
        name: 'Computer Proc. Scheduler',
        dotnum: '221.362-030',
        m: '2',
        l: '       4',
        svp: '      6',
        wgcheck: '07.05'
    },
    {
        workgroup_id: 35,
        name: 'News Assistant',
        dotnum: '209.367-038',
        m: '2',
        l: '       4',
        svp: '      3',
        wgcheck: '07.05'
    },
    {
        workgroup_id: 35,
        name: 'Dispatcher, Motor Vehicle',
        dotnum: '249.167-014',
        m: '2',
        l: '3',
        svp: '5',
        wgcheck: '07.05'
    },
    {
        workgroup_id: 35,
        name: 'Mail Carrier',
        dotnum: '230.367-010',
        m: '2',
        l: '       3',
        svp: '      4',
        wgcheck: '07.05'
    },
    {
        workgroup_id: 35,
        name: 'Shipping-Order Clerk',
        dotnum: '219.367-030',
        m: '2',
        l: '       3',
        svp: '      4',
        wgcheck: '07.05'
    },
    {
        workgroup_id: 35,
        name: 'File Clerk II',
        dotnum: '206.367-014',
        m: '2',
        l: '       3',
        svp: '      3',
        wgcheck: '07.05'
    },
    {
        workgroup_id: 35,
        name: 'Credit Card Control Clerk',
        dotnum: '249.367-026',
        m: '2',
        l: '       2',
        svp: '      3',
        wgcheck: '07.05'
    },
    {
        workgroup_id: 35,
        name: 'Route-Delivery Clerk',
        dotnum: '222.587-034',
        m: '2',
        l: '       2',
        svp: '      3',
        wgcheck: '07.05'
    },
    {
        workgroup_id: 35,
        name: 'Merchandise Distributor',
        dotnum: '219.367-018',
        m: '2',
        l: '       2',
        svp: '      3',
        wgcheck: '07.05'
    },
    {
        workgroup_id: 35,
        name: 'Title Searcher',
        dotnum: '209.367-046',
        m: '1',
        l: '       3',
        svp: '      5',
        wgcheck: '07.05'
    },
    {
        workgroup_id: 35,
        name: 'Credit-Card Clerk',
        dotnum: '209.587-014',
        m: '1',
        l: '       3',
        svp: '      3',
        wgcheck: '07.05'
    },
    {
        workgroup_id: 35,
        name: 'Mail Clerk',
        dotnum: '209.687-026',
        m: '1',
        l: '       2',
        svp: '      2',
        wgcheck: '07.05'
    },
    {
        workgroup_id: 36,
        name: 'Network Control Operator',
        dotnum: '031.262-014',
        m: '3',
        l: '       4',
        svp: '      6',
        wgcheck: '07.06'
    },
    {
        workgroup_id: 36,
        name: 'Billing-Machine Operator',
        dotnum: '214.482-010',
        m: '3',
        l: '       3',
        svp: '      4',
        wgcheck: '07.06'
    },
    {
        workgroup_id: 36,
        name: 'Clerk-Typist',
        dotnum: '203.362-010',
        m: '3',
        l: '       3',
        svp: '      4',
        wgcheck: '07.06'
    },
    {
        workgroup_id: 36,
        name: 'Digitizer Operator',
        dotnum: '213.582-010',
        m: '3',
        l: '       2',
        svp: '      5',
        wgcheck: '07.06'
    },
    {
        workgroup_id: 36,
        name: 'Computer Operator',
        dotnum: '213.362-010',
        m: '2',
        l: '       3',
        svp: '      6',
        wgcheck: '07.06'
    },
    {
        workgroup_id: 36,
        name: 'Credit Reporting Clerk',
        dotnum: '203.362-014',
        m: '2',
        l: '3',
        svp: '4',
        wgcheck: '07.06'
    },
    {
        workgroup_id: 36,
        name: 'Computer Periph. Eqp. Op.',
        dotnum: '213.382-010',
        m: '2',
        l: '       3',
        svp: '      4',
        wgcheck: '07.06'
    },
    {
        workgroup_id: 36,
        name: 'Data Entry Clerk',
        dotnum: '203.582-054',
        m: '2',
        l: '       3',
        svp: '      4',
        wgcheck: '07.06'
    },
    {
        workgroup_id: 36,
        name: 'Typist',
        dotnum: '203.582-066',
        m: '2',
        l: '       3',
        svp: '      3',
        wgcheck: '07.06'
    },
    {
        workgroup_id: 36,
        name: 'Music Copyist',
        dotnum: '209.582-010',
        m: '2',
        l: '       2',
        svp: '      5',
        wgcheck: '07.06'
    },
    {
        workgroup_id: 36,
        name: 'Food Checker',
        dotnum: '211.482-014',
        m: '2',
        l: '       1',
        svp: '      3',
        wgcheck: '07.06'
    },
    {
        workgroup_id: 36,
        name: 'Transcribing-Mach. Oper.',
        dotnum: '203.582-058',
        m: '1',
        l: '       3',
        svp: '      5',
        wgcheck: '07.06'
    },
    {
        workgroup_id: 36,
        name: 'Braille Typist',
        dotnum: '203.582-014',
        m: '1',
        l: '       3',
        svp: '      5',
        wgcheck: '07.06'
    },
    {
        workgroup_id: 37,
        name: 'Distributing Clerk',
        dotnum: '222.587-018',
        m: '2',
        l: '       3',
        svp: '      3',
        wgcheck: '07.07'
    },
    {
        workgroup_id: 37,
        name: 'Clerk, General',
        dotnum: '209.562-010',
        m: '2',
        l: '       3',
        svp: '      3',
        wgcheck: '07.07'
    },
    {
        workgroup_id: 37,
        name: 'Checker I',
        dotnum: '222.687-010',
        m: '2',
        l: '       2',
        svp: '      2',
        wgcheck: '07.07'
    },
    {
        workgroup_id: 37,
        name: 'Office Helper',
        dotnum: '239.567-010',
        m: '2',
        l: '       2',
        svp: '      2',
        wgcheck: '07.07'
    },
    {
        workgroup_id: 37,
        name: 'Direct-Mail Clerk',
        dotnum: '209.587-018',
        m: '1',
        l: '       2',
        svp: '      4',
        wgcheck: '07.07'
    },
    {
        workgroup_id: 37,
        name: 'File Clerk I',
        dotnum: '206.387-034',
        m: '1',
        l: '       2',
        svp: '      3',
        wgcheck: '07.07'
    },
    {
        workgroup_id: 37,
        name: 'Coin-Machine Collector',
        dotnum: '292.687-010',
        m: '1',
        l: '       2',
        svp: '      2',
        wgcheck: '07.07'
    },
    {
        workgroup_id: 37,
        name: 'Deliverer, Outside',
        dotnum: '230.663-010',
        m: '1',
        l: '       2',
        svp: '      2',
        wgcheck: '07.07'
    },
    {
        workgroup_id: 37,
        name: 'Ad-Material Distributor',
        dotnum: '230.687-010',
        m: '1',
        l: '       1',
        svp: '      2',
        wgcheck: '07.07'
    },
    {
        workgroup_id: 38,
        name: 'Sales Rep., Data Process.',
        dotnum: '251.157-014',
        m: '5',
        l: '       5',
        svp: '      7',
        wgcheck: '08.01'
    },
    {
        workgroup_id: 38,
        name: 'Sales Rep., Financial. Serv.',
        dotnum: '250.257-022',
        m: '4',
        l: '       5',
        svp: '      7',
        wgcheck: '08.01'
    },
    {
        workgroup_id: 38,
        name: 'Estate Planner',
        dotnum: '186.167-010',
        m: '4',
        l: '       5',
        svp: '      7',
        wgcheck: '08.01'
    },
    {
        workgroup_id: 38,
        name: 'Sales Rep., Computers/EDP',
        dotnum: '275.257-010',
        m: '4',
        l: '       4',
        svp: '      6',
        wgcheck: '08.01'
    },
    {
        workgroup_id: 38,
        name: 'Sales Rep., Communic. Eqp.',
        dotnum: '271.257-010',
        m: '4',
        l: '       4',
        svp: '      6',
        wgcheck: '08.01'
    },
    {
        workgroup_id: 38,
        name: 'Financial Planner',
        dotnum: '250.257-014',
        m: '3',
        l: '       4',
        svp: '      8',
        wgcheck: '08.01'
    },
    {
        workgroup_id: 38,
        name: 'Sales Rep., Electron. Parts',
        dotnum: '271.357-010',
        m: '3',
        l: '       4',
        svp: '      6',
        wgcheck: '08.01'
    },
    {
        workgroup_id: 38,
        name: 'Sales Rep., Radio/TV Time',
        dotnum: '259.357-018',
        m: '3',
        l: '       4',
        svp: '      6',
        wgcheck: '08.01'
    },
    {
        workgroup_id: 38,
        name: 'Sales Rep., Dental/Med. Eqp.',
        dotnum: '276.257-010',
        m: '3',
        l: '4',
        svp: '6',
        wgcheck: '08.01'
    },
    {
        workgroup_id: 38,
        name: 'Sales Rep., Telephone Svcs',
        dotnum: '253.257-010',
        m: '3',
        l: '       4',
        svp: '      6',
        wgcheck: '08.01'
    },
    {
        workgroup_id: 38,
        name: 'Communications Consultant',
        dotnum: '253.157-010',
        m: '3',
        l: '4',
        svp: '6',
        wgcheck: '08.01'
    },
    {
        workgroup_id: 38,
        name: 'Sales Rep., Advertising',
        dotnum: '254.357-014',
        m: '3',
        l: '       4',
        svp: '      6',
        wgcheck: '08.01'
    },
    {
        workgroup_id: 38,
        name: 'Buyer',
        dotnum: '162.157-018',
        m: '3',
        l: '       4',
        svp: '      6',
        wgcheck: '08.01'
    },
    {
        workgroup_id: 38,
        name: 'Sales Rep., Printing',
        dotnum: '254.357-018',
        m: '3',
        l: '       4',
        svp: '      5',
        wgcheck: '08.01'
    },
    {
        workgroup_id: 38,
        name: 'Sales Rep., Shipping Svcs.',
        dotnum: '252.357-014',
        m: '3',
        l: '       3',
        svp: '      5',
        wgcheck: '08.01'
    },
    {
        workgroup_id: 38,
        name: 'Comparison Shopper',
        dotnum: '296.367-014',
        m: '2',
        l: '       3',
        svp: '      3',
        wgcheck: '08.01'
    },
    {
        workgroup_id: 39,
        name: 'Manufacturer\'s Rep.',
        dotnum: '279.157-010',
        m: '3',
        l: '       4',
        svp: '      6',
        wgcheck: '08.02'
    },
    {
        workgroup_id: 39,
        name: 'Sales Rep., School Eq\'p.',
        dotnum: '275.357-042',
        m: '3',
        l: '       4',
        svp: '      5',
        wgcheck: '08.02'
    },
    {
        workgroup_id: 39,
        name: 'Sales Rep., Auto-Leasing',
        dotnum: '273.357-014',
        m: '3',
        l: '       4',
        svp: '      5',
        wgcheck: '08.02'
    },
    {
        workgroup_id: 39,
        name: 'Salesperson, Household Appl.',
        dotnum: '270.357-034',
        m: '3',
        l: '4',
        svp: '4',
        wgcheck: '08.02'
    },
    {
        workgroup_id: 39,
        name: 'Sales Agent, Real Estate',
        dotnum: '250.357-018',
        m: '3',
        l: '       4',
        svp: '      5',
        wgcheck: '08.02'
    },
    {
        workgroup_id: 39,
        name: 'Sales Rep., Commerc. Eq\'p.',
        dotnum: '275.357-018',
        m: '3',
        l: '       4',
        svp: '      4',
        wgcheck: '08.02'
    },
    {
        workgroup_id: 39,
        name: 'Salesperson, Parts',
        dotnum: '279.357-062',
        m: '3',
        l: '       3',
        svp: '      5',
        wgcheck: '08.02'
    },
    {
        workgroup_id: 39,
        name: 'Salesperson, Cosmetics',
        dotnum: '262.357-018',
        m: '3',
        l: '       3',
        svp: '      4',
        wgcheck: '08.02'
    },
    {
        workgroup_id: 39,
        name: 'Salesperson, Men\'s Clothing',
        dotnum: '261.357-050',
        m: '3',
        l: '       3',
        svp: '      4',
        wgcheck: '08.02'
    },
    {
        workgroup_id: 39,
        name: 'Telephone Solicitor',
        dotnum: '299.357-014',
        m: '3',
        l: '       3',
        svp: '      3',
        wgcheck: '08.02'
    },
    {
        workgroup_id: 39,
        name: 'Leasing Agent, Residence',
        dotnum: '250.357-014',
        m: '2',
        l: '       4',
        svp: '      5',
        wgcheck: '08.02'
    },
    {
        workgroup_id: 39,
        name: 'Salesperson, Art Objects',
        dotnum: '277.457-010',
        m: '2',
        l: '       3',
        svp: '      4',
        wgcheck: '08.02'
    },
    {
        workgroup_id: 39,
        name: 'Driver, Sales Route',
        dotnum: '292.353-010',
        m: '2',
        l: '       3',
        svp: '      3',
        wgcheck: '08.02'
    },
    {
        workgroup_id: 39,
        name: 'Salesperson, Gen\'l Merch.',
        dotnum: '279.357-054',
        m: '2',
        l: '       2',
        svp: '      3',
        wgcheck: '08.02'
    },
    {
        workgroup_id: 40,
        name: 'Vendor',
        dotnum: '291.457-022',
        m: '2',
        l: '       2',
        svp: '      2',
        wgcheck: '08.03'
    },
    {
        workgroup_id: 40,
        name: 'Peddler',
        dotnum: '291.457-018',
        m: '2',
        l: '       1',
        svp: '      3',
        wgcheck: '08.03'
    },
    {
        workgroup_id: 40,
        name: 'Photographer',
        dotnum: '143.457-010',
        m: '1',
        l: '       3',
        svp: '      3',
        wgcheck: '08.03'
    },
    {
        workgroup_id: 41,
        name: 'Group Worker',
        dotnum: '195.164-010',
        m: '4',
        l: '       5',
        svp: '      7',
        wgcheck: '09.01'
    },
    {
        workgroup_id: 41,
        name: 'Director, Social',
        dotnum: '352.167-010',
        m: '3',
        l: '       4',
        svp: '      6',
        wgcheck: '09.01'
    },
    {
        workgroup_id: 41,
        name: 'Recreation Leader',
        dotnum: '195.227-014',
        m: '3',
        l: '       4',
        svp: '      6',
        wgcheck: '09.01'
    },
    {
        workgroup_id: 41,
        name: 'Airplane-Flight Attendant',
        dotnum: '352.367-010',
        m: '3',
        l: '       3',
        svp: '      3',
        wgcheck: '09.01'
    },
    {
        workgroup_id: 41,
        name: 'Counselor, Camp',
        dotnum: '159.124-010',
        m: '2',
        l: '       4',
        svp: '      5',
        wgcheck: '09.01'
    },
    {
        workgroup_id: 41,
        name: 'Passenger Service Rep.',
        dotnum: '359.677-022',
        m: '2',
        l: '       3',
        svp: '      3',
        wgcheck: '09.01'
    },
    {
        workgroup_id: 41,
        name: 'Recreation Aide',
        dotnum: '195.367-030',
        m: '2',
        l: '       3',
        svp: '      2',
        wgcheck: '09.01'
    },
    {
        workgroup_id: 41,
        name: 'Serv. Attend., Sleep. Car',
        dotnum: '351.677-010',
        m: '2',
        l: '       2',
        svp: '      2',
        wgcheck: '09.01'
    },
    {
        workgroup_id: 41,
        name: 'Amusement Park Worker',
        dotnum: '349.664-010',
        m: '2',
        l: '       2',
        svp: '      2',
        wgcheck: '09.01'
    },
    {
        workgroup_id: 41,
        name: 'Guide, Establishment',
        dotnum: '353.367-014',
        m: '1',
        l: '       3',
        svp: '      3',
        wgcheck: '09.01'
    },
    {
        workgroup_id: 42,
        name: 'Cosmetologist',
        dotnum: '332.271-010',
        m: '3',
        l: '       3',
        svp: '      6',
        wgcheck: '09.02'
    },
    {
        workgroup_id: 42,
        name: 'Hair Stylist',
        dotnum: '332.271-018',
        m: '3',
        l: '       3',
        svp: '      6',
        wgcheck: '09.02'
    },
    {
        workgroup_id: 42,
        name: 'Barber',
        dotnum: '330.371-010',
        m: '2',
        l: '       3',
        svp: '      6',
        wgcheck: '09.02'
    },
    {
        workgroup_id: 43,
        name: 'Instructor, Driving',
        dotnum: '099.223-010',
        m: '2',
        l: '       3',
        svp: '      4',
        wgcheck: '09.03'
    },
    {
        workgroup_id: 43,
        name: 'Bus Driver',
        dotnum: '913.463-010',
        m: '2',
        l: '       2',
        svp: '      4',
        wgcheck: '09.03'
    },
    {
        workgroup_id: 43,
        name: 'Driver',
        dotnum: '913.663-018',
        m: '2',
        l: '       2',
        svp: '      3',
        wgcheck: '09.03'
    },
    {
        workgroup_id: 43,
        name: 'Taxi Driver',
        dotnum: '913.463-018',
        m: '2',
        l: '       2',
        svp: '      3',
        wgcheck: '09.03'
    },
    {
        workgroup_id: 43,
        name: 'Chauffeur',
        dotnum: '913.663-010',
        m: '2',
        l: '       2',
        svp: '      3',
        wgcheck: '09.03'
    },
    {
        workgroup_id: 44,
        name: 'Baggage Checker',
        dotnum: '357.477-010',
        m: '2',
        l: '       3',
        svp: '      3',
        wgcheck: '09.05'
    },
    {
        workgroup_id: 44,
        name: 'Caterer Helper',
        dotnum: '319.677-010',
        m: '2',
        l: '       2',
        svp: '      3',
        wgcheck: '09.05'
    },
    {
        workgroup_id: 44,
        name: 'Personal Attendant',
        dotnum: '309.674-014',
        m: '2',
        l: '2',
        svp: '3',
        wgcheck: '09.05'
    },
    {
        workgroup_id: 44,
        name: 'Food-Service Worker, Hosp.',
        dotnum: '319.677-014',
        m: '2',
        l: '       2',
        svp: '      2',
        wgcheck: '09.05'
    },
    {
        workgroup_id: 44,
        name: 'Bellhop',
        dotnum: '324.677-010',
        m: '2',
        l: '       2',
        svp: '      2',
        wgcheck: '09.05'
    },
    {
        workgroup_id: 44,
        name: 'Waiter/Waitress, Buffet',
        dotnum: '311.674-018',
        m: '2',
        l: '       1',
        svp: '      3',
        wgcheck: '09.05'
    },
    {
        workgroup_id: 44,
        name: 'Manicurist',
        dotnum: '331.674-010',
        m: '1',
        l: '       2',
        svp: '      3',
        wgcheck: '09.05'
    },
    {
        workgroup_id: 44,
        name: 'Ticket Taker',
        dotnum: '344.667-010',
        m: '1',
        l: '       2',
        svp: '      2',
        wgcheck: '09.05'
    },
    {
        workgroup_id: 44,
        name: 'Counter-Supply Worker',
        dotnum: '319.687-010',
        m: '1',
        l: '       1',
        svp: '      2',
        wgcheck: '09.05'
    },
    {
        workgroup_id: 44,
        name: 'Dining Room Attendant',
        dotnum: '311.677-018',
        m: '1',
        l: '       1',
        svp: '      2',
        wgcheck: '09.05'
    },
    {
        workgroup_id: 44,
        name: 'Usher',
        dotnum: '344.677-014',
        m: '1',
        l: '       1',
        svp: '      2',
        wgcheck: '09.05'
    },
    {
        workgroup_id: 44,
        name: 'Bagger',
        dotnum: '920.687-014',
        m: '1',
        l: '1',
        svp: '2',
        wgcheck: '09.05'
    },
    {
        workgroup_id: 44,
        name: 'Cafeteria Attendant',
        dotnum: '311.677-010',
        m: '1',
        l: '       1',
        svp: '      2',
        wgcheck: '09.05'
    },
    {
        workgroup_id: 45,
        name: 'Clinical Psychologist',
        dotnum: '045.107-022',
        m: '5',
        l: '       6',
        svp: '      8',
        wgcheck: '10.01'
    },
    {
        workgroup_id: 45,
        name: 'Counselor',
        dotnum: '045.107-010',
        m: '5',
        l: '       5',
        svp: '      7',
        wgcheck: '10.01'
    },
    {
        workgroup_id: 45,
        name: 'Social Worker, Psychiatric',
        dotnum: '195.107-034',
        m: '3',
        l: '       5',
        svp: '      8',
        wgcheck: '10.01'
    },
    {
        workgroup_id: 45,
        name: 'Voc. Rehab. Counselor',
        dotnum: '045.107-042',
        m: '3',
        l: '5',
        svp: '8',
        wgcheck: '10.01'
    },
    {
        workgroup_id: 45,
        name: 'Probation-&-Parole Officer',
        dotnum: '195.107-046',
        m: '3',
        l: '       5',
        svp: '      7',
        wgcheck: '10.01'
    },
    {
        workgroup_id: 45,
        name: 'Caseworker',
        dotnum: '195.107-010',
        m: '3',
        l: '       5',
        svp: '      7',
        wgcheck: '10.01'
    },
    {
        workgroup_id: 45,
        name: 'Community Worker',
        dotnum: '195.367-018',
        m: '3',
        l: '       4',
        svp: '      6',
        wgcheck: '10.01'
    },
    {
        workgroup_id: 45,
        name: 'Health Svcs. Coordinator',
        dotnum: '195.167-046',
        m: '3',
        l: '4',
        svp: '6',
        wgcheck: '10.01'
    },
    {
        workgroup_id: 45,
        name: 'Case Aide',
        dotnum: '195.367-010',
        m: '3',
        l: '       3',
        svp: '      3',
        wgcheck: '10.01'
    },
    {
        workgroup_id: 45,
        name: 'Preparole-Counseling Aide',
        dotnum: '195.367-026',
        m: '2',
        l: '       4',
        svp: '      6',
        wgcheck: '10.01'
    },
    {
        workgroup_id: 46,
        name: 'Nurse Practitioner',
        dotnum: '075.264-010',
        m: '5',
        l: '       5',
        svp: '      8',
        wgcheck: '10.02'
    },
    {
        workgroup_id: 46,
        name: 'Radiologic Technologist',
        dotnum: '078.362-026',
        m: '4',
        l: '       5',
        svp: '      7',
        wgcheck: '10.02'
    },
    {
        workgroup_id: 46,
        name: 'Physical Therapist',
        dotnum: '076.121-014',
        m: '4',
        l: '5',
        svp: '7',
        wgcheck: '10.02'
    },
    {
        workgroup_id: 46,
        name: 'Physician Assistant',
        dotnum: '079.364-018',
        m: '4',
        l: '5',
        svp: '7',
        wgcheck: '10.02'
    },
    {
        workgroup_id: 46,
        name: 'Teacher, Learning Disabled',
        dotnum: '094.227-030',
        m: '4',
        l: '       5',
        svp: '      7',
        wgcheck: '10.02'
    },
    {
        workgroup_id: 46,
        name: 'Nurse, General Duty',
        dotnum: '075.364-010',
        m: '4',
        l: '       5',
        svp: '      7',
        wgcheck: '10.02'
    },
    {
        workgroup_id: 46,
        name: 'Nurse, Office',
        dotnum: '075.374-014',
        m: '3',
        l: '       5',
        svp: '      7',
        wgcheck: '10.02'
    },
    {
        workgroup_id: 46,
        name: 'Program Aide, Group Work',
        dotnum: '195.227-010',
        m: '3',
        l: '       4',
        svp: '      6',
        wgcheck: '10.02'
    },
    {
        workgroup_id: 46,
        name: 'Occupational Therapy Ass\'t.',
        dotnum: '076.364-010',
        m: '3',
        l: '       4',
        svp: '      6',
        wgcheck: '10.02'
    },
    {
        workgroup_id: 46,
        name: 'Physical Therapist Ass\'t.',
        dotnum: '076.224-010',
        m: '3',
        l: '       4',
        svp: '      6',
        wgcheck: '10.02'
    },
    {
        workgroup_id: 46,
        name: 'Dental Hygienist',
        dotnum: '078.361-010',
        m: '3',
        l: '       4',
        svp: '      6',
        wgcheck: '10.02'
    },
    {
        workgroup_id: 46,
        name: 'Psychiatric Technician',
        dotnum: '079.374-026',
        m: '3',
        l: '       4',
        svp: '      6',
        wgcheck: '10.02'
    },
    {
        workgroup_id: 46,
        name: 'Nurse, Licensed Practical',
        dotnum: '079.374-014',
        m: '3',
        l: '       4',
        svp: '      6',
        wgcheck: '10.02'
    },
    {
        workgroup_id: 46,
        name: 'Dialysis Technician',
        dotnum: '078.362-014',
        m: '3',
        l: '       3',
        svp: '      6',
        wgcheck: '10.02'
    },
    {
        workgroup_id: 46,
        name: 'Respiratory Therapist',
        dotnum: '076.361-014',
        m: '3',
        l: '       3',
        svp: '      6',
        wgcheck: '10.02'
    },
    {
        workgroup_id: 46,
        name: 'Orientation/Mobility Therapist',
        dotnum: '076.224-014',
        m: '2',
        l: '5',
        svp: '6',
        wgcheck: '10.02'
    },
    {
        workgroup_id: 46,
        name: 'Recreational Therapist',
        dotnum: '076.124-014',
        m: '2',
        l: '       4',
        svp: '      6',
        wgcheck: '10.02'
    },
    {
        workgroup_id: 46,
        name: 'Teacher, Preschool',
        dotnum: '092.227-018',
        m: '2',
        l: '       3',
        svp: '      7',
        wgcheck: '10.02'
    },
    {
        workgroup_id: 46,
        name: 'Phys.-Integr. Practitioner',
        dotnum: '076.264-010',
        m: '1',
        l: '       2',
        svp: '      6',
        wgcheck: '10.02'
    },
    {
        workgroup_id: 47,
        name: 'Optometric Assistant',
        dotnum: '079.364-014',
        m: '4',
        l: '       4',
        svp: '      6',
        wgcheck: '10.03'
    },
    {
        workgroup_id: 47,
        name: 'Electromyographic Tech.',
        dotnum: '078.362-038',
        m: '4',
        l: '       4',
        svp: '      5',
        wgcheck: '10.03'
    },
    {
        workgroup_id: 47,
        name: 'Surgical Technician',
        dotnum: '079.374-022',
        m: '4',
        l: '       3',
        svp: '      6',
        wgcheck: '10.03'
    },
    {
        workgroup_id: 47,
        name: 'Paramedic',
        dotnum: '079.364-026',
        m: '3',
        l: '       4',
        svp: '      6',
        wgcheck: '10.03'
    },
    {
        workgroup_id: 47,
        name: 'Medical Assistant',
        dotnum: '079.362-010',
        m: '3',
        l: '4',
        svp: '6',
        wgcheck: '10.03'
    },
    {
        workgroup_id: 47,
        name: 'Dental Assistant',
        dotnum: '079.361-018',
        m: '3',
        l: '       4',
        svp: '      6',
        wgcheck: '10.03'
    },
    {
        workgroup_id: 47,
        name: 'Mental-Retardation Aide',
        dotnum: '355.377-018',
        m: '3',
        l: '       3',
        svp: '      6',
        wgcheck: '10.03'
    },
    {
        workgroup_id: 47,
        name: 'Respiratory-Therapy Aide',
        dotnum: '355.674-022',
        m: '3',
        l: '       3',
        svp: '      4',
        wgcheck: '10.03'
    },
    {
        workgroup_id: 47,
        name: 'Electrocardiograph Tech.',
        dotnum: '078.362-018',
        m: '3',
        l: '       3',
        svp: '      4',
        wgcheck: '10.03'
    },
    {
        workgroup_id: 47,
        name: 'Children\'s Tutor',
        dotnum: '099.227-010',
        m: '2',
        l: '       4',
        svp: '      5',
        wgcheck: '10.03'
    },
    {
        workgroup_id: 47,
        name: 'Nursery School Attendant',
        dotnum: '359.677-018',
        m: '2',
        l: '       3',
        svp: '      4',
        wgcheck: '10.03'
    },
    {
        workgroup_id: 47,
        name: 'Nurse, Practical',
        dotnum: '354.374-010',
        m: '2',
        l: '       3',
        svp: '      4',
        wgcheck: '10.03'
    },
    {
        workgroup_id: 47,
        name: 'Nurse Assistant',
        dotnum: '355.674-014',
        m: '2',
        l: '       2',
        svp: '      4',
        wgcheck: '10.03'
    },
    {
        workgroup_id: 47,
        name: 'Home Attendant',
        dotnum: '354.377-014',
        m: '2',
        l: '       2',
        svp: '      3',
        wgcheck: '10.03'
    },
    {
        workgroup_id: 47,
        name: 'Child-Care Attend., School',
        dotnum: '355.674-010',
        m: '1',
        l: '       2',
        svp: '      2',
        wgcheck: '10.03'
    },
    {
        workgroup_id: 48,
        name: 'Programmer, Eng. & Scient.',
        dotnum: '030.162-018',
        m: '6',
        l: '       6',
        svp: '      8',
        wgcheck: '11.01'
    },
    {
        workgroup_id: 48,
        name: 'Consultant',
        dotnum: '189.117-050',
        m: '5',
        l: '5',
        svp: '8',
        wgcheck: '11.01'
    },
    {
        workgroup_id: 48,
        name: 'Software Engineer',
        dotnum: '030.062-010',
        m: '5',
        l: '       5',
        svp: '      8',
        wgcheck: '11.01'
    },
    {
        workgroup_id: 48,
        name: 'Information Scientist',
        dotnum: '109.067-010',
        m: '5',
        l: '       5',
        svp: '      7',
        wgcheck: '11.01'
    },
    {
        workgroup_id: 48,
        name: 'Dir., Records Mgmt',
        dotnum: '161.117-014',
        m: '4',
        l: '5',
        svp: '8',
        wgcheck: '11.01'
    },
    {
        workgroup_id: 48,
        name: 'Tech. Support Specialist',
        dotnum: '033.162-018',
        m: '4',
        l: '       5',
        svp: '      7',
        wgcheck: '11.01'
    },
    {
        workgroup_id: 48,
        name: 'Systems Analyst',
        dotnum: '030.167-014',
        m: '4',
        l: '       5',
        svp: '      7',
        wgcheck: '11.01'
    },
    {
        workgroup_id: 48,
        name: 'Computer Programmer',
        dotnum: '030.162-010',
        m: '4',
        l: '       5',
        svp: '      7',
        wgcheck: '11.01'
    },
    {
        workgroup_id: 48,
        name: 'Mgr., Computer Operations',
        dotnum: '169.167-082',
        m: '4',
        l: '       4',
        svp: '      8',
        wgcheck: '11.01'
    },
    {
        workgroup_id: 48,
        name: 'Data Recovery Planner',
        dotnum: '033.162-014',
        m: '3',
        l: '       5',
        svp: '      8',
        wgcheck: '11.01'
    },
    {
        workgroup_id: 49,
        name: 'Teacher, Resource',
        dotnum: '099.227-042',
        m: '5',
        l: '       5',
        svp: '      7',
        wgcheck: '11.02'
    },
    {
        workgroup_id: 49,
        name: 'Teacher, Secondary School',
        dotnum: '091.227-010',
        m: '4',
        l: '5',
        svp: '7',
        wgcheck: '11.02'
    },
    {
        workgroup_id: 49,
        name: 'Teacher, Elementary School',
        dotnum: '092.227-010',
        m: '4',
        l: '       5',
        svp: '      7',
        wgcheck: '11.02'
    },
    {
        workgroup_id: 49,
        name: 'Media Specialist, School',
        dotnum: '100.167-030',
        m: '3',
        l: '       5',
        svp: '      8',
        wgcheck: '11.02'
    },
    {
        workgroup_id: 49,
        name: 'Tutor',
        dotnum: '099.227-034',
        m: '3',
        l: '5',
        svp: '7',
        wgcheck: '11.02'
    },
    {
        workgroup_id: 49,
        name: 'Human Resource Advisor',
        dotnum: '166.267-046',
        m: '3',
        l: '       5',
        svp: '      7',
        wgcheck: '11.02'
    },
    {
        workgroup_id: 49,
        name: 'Librarian',
        dotnum: '100.127-014',
        m: '3',
        l: '       4',
        svp: '      7',
        wgcheck: '11.02'
    },
    {
        workgroup_id: 49,
        name: 'Career-Guidance Tech.',
        dotnum: '249.367-014',
        m: '3',
        l: '       4',
        svp: '      6',
        wgcheck: '11.02'
    },
    {
        workgroup_id: 49,
        name: 'Teacher Aide I',
        dotnum: '099.327-010',
        m: '3',
        l: '       4',
        svp: '      6',
        wgcheck: '11.02'
    },
    {
        workgroup_id: 49,
        name: 'Film-Rental Clerk',
        dotnum: '295.367-018',
        m: '3',
        l: '       4',
        svp: '      5',
        wgcheck: '11.02'
    },
    {
        workgroup_id: 49,
        name: 'Audiovisual Librarian',
        dotnum: '100.167-010',
        m: '3',
        l: '       3',
        svp: '      7',
        wgcheck: '11.02'
    },
    {
        workgroup_id: 49,
        name: 'Library Tech. Ass\'t',
        dotnum: '100.367-018',
        m: '3',
        l: '       3',
        svp: '      5',
        wgcheck: '11.02'
    },
    {
        workgroup_id: 49,
        name: 'Librarian, Spec. Collect.',
        dotnum: '100.267-014',
        m: '2',
        l: '       5',
        svp: '      8',
        wgcheck: '11.02'
    },
    {
        workgroup_id: 49,
        name: 'Music Librarian',
        dotnum: '100.367-022',
        m: '2',
        l: '       4',
        svp: '      6',
        wgcheck: '11.02'
    },
    {
        workgroup_id: 49,
        name: 'Teacher, Adult Education',
        dotnum: '099.227-030',
        m: '2',
        l: '       4',
        svp: '      7',
        wgcheck: '11.02'
    },
    {
        workgroup_id: 49,
        name: 'Library Assistant',
        dotnum: '249.367-046',
        m: '2',
        l: '       3',
        svp: '      5',
        wgcheck: '11.02'
    },
    {
        workgroup_id: 50,
        name: 'Psychologist, Engineering',
        dotnum: '045.061-014',
        m: '6',
        l: '       6',
        svp: '      8',
        wgcheck: '11.03'
    },
    {
        workgroup_id: 50,
        name: 'Psychologist, Educational',
        dotnum: '045.067-010',
        m: '6',
        l: '       5',
        svp: '      8',
        wgcheck: '11.03'
    },
    {
        workgroup_id: 50,
        name: 'Economist',
        dotnum: '050.067-010',
        m: '5',
        l: '       5',
        svp: '      8',
        wgcheck: '11.03'
    },
    {
        workgroup_id: 50,
        name: 'Planner, Program Services',
        dotnum: '188.167-110',
        m: '5',
        l: '       5',
        svp: '      7',
        wgcheck: '11.03'
    },
    {
        workgroup_id: 50,
        name: 'Psychometrist',
        dotnum: '045.067-018',
        m: '5',
        l: '       5',
        svp: '      7',
        wgcheck: '11.03'
    },
    {
        workgroup_id: 50,
        name: 'Urban Planner',
        dotnum: '199.167-014',
        m: '4',
        l: '5',
        svp: '8',
        wgcheck: '11.03'
    },
    {
        workgroup_id: 50,
        name: 'Occupational Analyst',
        dotnum: '166.067-010',
        m: '4',
        l: '       5',
        svp: '      7',
        wgcheck: '11.03'
    },
    {
        workgroup_id: 50,
        name: 'Job Analyst',
        dotnum: '166.267-018',
        m: '4',
        l: '       5',
        svp: '      6',
        wgcheck: '11.03'
    },
    {
        workgroup_id: 50,
        name: 'City Planning Aide',
        dotnum: '199.364-010',
        m: '4',
        l: '       4',
        svp: '      6',
        wgcheck: '11.03'
    },
    {
        workgroup_id: 50,
        name: 'Archivist',
        dotnum: '101.167-010',
        m: '3',
        l: '       5',
        svp: '      8',
        wgcheck: '11.03'
    },
    {
        workgroup_id: 50,
        name: 'Employment Interviewer',
        dotnum: '166.267-010',
        m: '3',
        l: '       5',
        svp: '      6',
        wgcheck: '11.03'
    },
    {
        workgroup_id: 50,
        name: 'Prison.-Class. Interviewer',
        dotnum: '166.267-022',
        m: '3',
        l: '       4',
        svp: '      7',
        wgcheck: '11.03'
    },
    {
        workgroup_id: 50,
        name: 'Job Development Specialist',
        dotnum: '166.267-034',
        m: '3',
        l: '       4',
        svp: '      5',
        wgcheck: '11.03'
    },
    {
        workgroup_id: 50,
        name: 'Historian',
        dotnum: '052.067-022',
        m: '2',
        l: '       5',
        svp: '      7',
        wgcheck: '11.03'
    },
    {
        workgroup_id: 50,
        name: 'Employee Relations Spec.',
        dotnum: '166.267-042',
        m: '2',
        l: '       2',
        svp: '      7',
        wgcheck: '11.03'
    },
    {
        workgroup_id: 51,
        name: 'Patent Agent',
        dotnum: '119.167-014',
        m: '5',
        l: '       6',
        svp: '      7',
        wgcheck: '11.04'
    },
    {
        workgroup_id: 51,
        name: 'Lawyer',
        dotnum: '110.107-010',
        m: '4',
        l: '       6',
        svp: '      8',
        wgcheck: '11.04'
    },
    {
        workgroup_id: 51,
        name: 'Conciliator',
        dotnum: '169.207-010',
        m: '4',
        l: '       5',
        svp: '      8',
        wgcheck: '11.04'
    },
    {
        workgroup_id: 51,
        name: 'Customs Broker',
        dotnum: '186.117-018',
        m: '4',
        l: '       5',
        svp: '      7',
        wgcheck: '11.04'
    },
    {
        workgroup_id: 51,
        name: 'Hearing Officer',
        dotnum: '119.107-010',
        m: '3',
        l: '       6',
        svp: '      9',
        wgcheck: '11.04'
    },
    {
        workgroup_id: 51,
        name: 'Appeals Referee',
        dotnum: '119.267-014',
        m: '3',
        l: '       6',
        svp: '      8',
        wgcheck: '11.04'
    },
    {
        workgroup_id: 51,
        name: 'Abstractor',
        dotnum: '119.267-010',
        m: '3',
        l: '       5',
        svp: '      6',
        wgcheck: '11.04'
    },
    {
        workgroup_id: 51,
        name: 'Tariff Publishing Agent',
        dotnum: '184.167-250',
        m: '3',
        l: '       3',
        svp: '      8',
        wgcheck: '11.04'
    },
    {
        workgroup_id: 51,
        name: 'Paralegal',
        dotnum: '119.267-026',
        m: '2',
        l: '       5',
        svp: '      7',
        wgcheck: '11.04'
    },
    {
        workgroup_id: 52,
        name: 'Dir., Quality Assurance',
        dotnum: '189.117-042',
        m: '5',
        l: '       5',
        svp: '      8',
        wgcheck: '11.05'
    },
    {
        workgroup_id: 52,
        name: 'Operations Manager',
        dotnum: '184.117-070',
        m: '5',
        l: '5',
        svp: '8',
        wgcheck: '11.05'
    },
    {
        workgroup_id: 52,
        name: 'Project Director',
        dotnum: '189.117-030',
        m: '5',
        l: '       5',
        svp: '      8',
        wgcheck: '11.05'
    },
    {
        workgroup_id: 52,
        name: 'Manager, Personnel',
        dotnum: '166.117-018',
        m: '5',
        l: '       5',
        svp: '      8',
        wgcheck: '11.05'
    },
    {
        workgroup_id: 52,
        name: 'Wholesaler I',
        dotnum: '185.167-070',
        m: '5',
        l: '       4',
        svp: '      8',
        wgcheck: '11.05'
    },
    {
        workgroup_id: 52,
        name: 'Research Analyst',
        dotnum: '169.267-034',
        m: '4',
        l: '5',
        svp: '8',
        wgcheck: '11.05'
    },
    {
        workgroup_id: 52,
        name: 'Comm. Loan Collection Officer',
        dotnum: '186.167-078',
        m: '4',
        l: '       5',
        svp: '      8',
        wgcheck: '11.05'
    },
    {
        workgroup_id: 52,
        name: 'Grant Coordinator',
        dotnum: '169.117-014',
        m: '4',
        l: '       5',
        svp: '      8',
        wgcheck: '11.05'
    },
    {
        workgroup_id: 52,
        name: 'Manager, Labor Relations',
        dotnum: '166.167-034',
        m: '4',
        l: '       5',
        svp: '      8',
        wgcheck: '11.05'
    },
    {
        workgroup_id: 52,
        name: 'Manager, Department',
        dotnum: '189.167-022',
        m: '4',
        l: '       4',
        svp: '      7',
        wgcheck: '11.05'
    },
    {
        workgroup_id: 52,
        name: 'Manager, Benefits',
        dotnum: '166.167-018',
        m: '4',
        l: '       4',
        svp: '      7',
        wgcheck: '11.05'
    },
    {
        workgroup_id: 52,
        name: 'Field Representative',
        dotnum: '163.267-010',
        m: '4',
        l: '       3',
        svp: '      6',
        wgcheck: '11.05'
    },
    {
        workgroup_id: 52,
        name: 'Manager, Sales',
        dotnum: '163.167-018',
        m: '3',
        l: '       5',
        svp: '      8',
        wgcheck: '11.05'
    },
    {
        workgroup_id: 52,
        name: 'Administrative Assistant',
        dotnum: '169.167-010',
        m: '3',
        l: '       5',
        svp: '      7',
        wgcheck: '11.05'
    },
    {
        workgroup_id: 52,
        name: 'Prog. Spec., Empl. Health',
        dotnum: '166.167-050',
        m: '3',
        l: '5',
        svp: '6',
        wgcheck: '11.05'
    },
    {
        workgroup_id: 52,
        name: 'Environmental Analyst',
        dotnum: '199.167-022',
        m: '3',
        l: '       4',
        svp: '      8',
        wgcheck: '11.05'
    },
    {
        workgroup_id: 52,
        name: 'Security Officer',
        dotnum: '189.167-034',
        m: '3',
        l: '       4',
        svp: '      7',
        wgcheck: '11.05'
    },
    {
        workgroup_id: 52,
        name: 'Purchasing Agent',
        dotnum: '162.157-038',
        m: '3',
        l: '       4',
        svp: '      7',
        wgcheck: '11.05'
    },
    {
        workgroup_id: 52,
        name: 'Mgr., Branch Oper. Eval.',
        dotnum: '187.167-062',
        m: '3',
        l: '4',
        svp: '6',
        wgcheck: '11.05'
    },
    {
        workgroup_id: 52,
        name: 'Management Trainee',
        dotnum: '189.167-018',
        m: '3',
        l: '       4',
        svp: '      6',
        wgcheck: '11.05'
    },
    {
        workgroup_id: 52,
        name: 'Supervisor, Terminal Oper.',
        dotnum: '184.167-242',
        m: '3',
        l: '       3',
        svp: '      7',
        wgcheck: '11.05'
    },
    {
        workgroup_id: 53,
        name: 'Accountant',
        dotnum: '160.162-018',
        m: '5',
        l: '       5',
        svp: '      8',
        wgcheck: '11.06'
    },
    {
        workgroup_id: 53,
        name: 'Market-Research Analyst I',
        dotnum: '050.067-014',
        m: '5',
        l: '5',
        svp: '7',
        wgcheck: '11.06'
    },
    {
        workgroup_id: 53,
        name: 'Auditor, Internal',
        dotnum: '160.167-034',
        m: '5',
        l: '       5',
        svp: '      7',
        wgcheck: '11.06'
    },
    {
        workgroup_id: 53,
        name: 'Controller',
        dotnum: '160.167-058',
        m: '5',
        l: '       4',
        svp: '      8',
        wgcheck: '11.06'
    },
    {
        workgroup_id: 53,
        name: 'Auditor, Data Processing',
        dotnum: '160.162-030',
        m: '4',
        l: '       5',
        svp: '      7',
        wgcheck: '11.06'
    },
    {
        workgroup_id: 53,
        name: 'Foreign-Exchange Dealer',
        dotnum: '186.117-082',
        m: '4',
        l: '       4',
        svp: '      8',
        wgcheck: '11.06'
    },
    {
        workgroup_id: 53,
        name: 'Mgr., Reports Analysis',
        dotnum: '161.167-022',
        m: '4',
        l: '4',
        svp: '8',
        wgcheck: '11.06'
    },
    {
        workgroup_id: 53,
        name: 'Mgr., Forms Analysis',
        dotnum: '161.167-014',
        m: '4',
        l: '4',
        svp: '8',
        wgcheck: '11.06'
    },
    {
        workgroup_id: 53,
        name: 'Mgr., Credit & Collection',
        dotnum: '169.167-086',
        m: '4',
        l: '       4',
        svp: '      8',
        wgcheck: '11.06'
    },
    {
        workgroup_id: 53,
        name: 'Floor Broker',
        dotnum: '162.167-034',
        m: '3',
        l: '       4',
        svp: '      6',
        wgcheck: '11.06'
    },
    {
        workgroup_id: 54,
        name: 'Dir., Outpatient Services',
        dotnum: '187.117-058',
        m: '5',
        l: '       6',
        svp: '      8',
        wgcheck: '11.07'
    },
    {
        workgroup_id: 54,
        name: 'Medical-Record Admin.',
        dotnum: '079.167-014',
        m: '5',
        l: '       6',
        svp: '      8',
        wgcheck: '11.07'
    },
    {
        workgroup_id: 54,
        name: 'Administrator, Health Care',
        dotnum: '187.117-010',
        m: '5',
        l: '       5',
        svp: '      8',
        wgcheck: '11.07'
    },
    {
        workgroup_id: 54,
        name: 'Director, Field Services',
        dotnum: '090.167-034',
        m: '4',
        l: '5',
        svp: '8',
        wgcheck: '11.07'
    },
    {
        workgroup_id: 54,
        name: 'Dir. of Pupil Personnel',
        dotnum: '099.167-034',
        m: '4',
        l: '       5',
        svp: '      8',
        wgcheck: '11.07'
    },
    {
        workgroup_id: 54,
        name: 'Mgr., Education & Training',
        dotnum: '166.167-026',
        m: '4',
        l: '       5',
        svp: '      7',
        wgcheck: '11.07'
    },
    {
        workgroup_id: 54,
        name: 'Emergency Med. Svcs. Coord.',
        dotnum: '079.117-010',
        m: '4',
        l: '       4',
        svp: '      8',
        wgcheck: '11.07'
    },
    {
        workgroup_id: 54,
        name: 'Dir., Volunteer Services',
        dotnum: '187.167-038',
        m: '4',
        l: '       4',
        svp: '      7',
        wgcheck: '11.07'
    },
    {
        workgroup_id: 54,
        name: 'Financial-Aid Officer',
        dotnum: '090.117-030',
        m: '3',
        l: '5',
        svp: '8',
        wgcheck: '11.07'
    },
    {
        workgroup_id: 54,
        name: 'Tech. Training Coordinator',
        dotnum: '166.167-054',
        m: '3',
        l: '       5',
        svp: '      8',
        wgcheck: '11.07'
    },
    {
        workgroup_id: 54,
        name: 'Recreation Supervisor',
        dotnum: '187.167-238',
        m: '3',
        l: '       5',
        svp: '      7',
        wgcheck: '11.07'
    },
    {
        workgroup_id: 54,
        name: 'Dir., Commun. Organization',
        dotnum: '187.167-234',
        m: '3',
        l: '       4',
        svp: '      8',
        wgcheck: '11.07'
    },
    {
        workgroup_id: 54,
        name: 'Director, Day Care Center',
        dotnum: '092.167-010',
        m: '3',
        l: '       4',
        svp: '      7',
        wgcheck: '11.07'
    },
    {
        workgroup_id: 55,
        name: 'Translator',
        dotnum: '137.267-018',
        m: '3',
        l: '       6',
        svp: '      7',
        wgcheck: '11.08'
    },
    {
        workgroup_id: 55,
        name: 'Writer, Tech. Publications',
        dotnum: '131.267-026',
        m: '3',
        l: '       5',
        svp: '      8',
        wgcheck: '11.08'
    },
    {
        workgroup_id: 55,
        name: 'Reporter',
        dotnum: '131.262-018',
        m: '3',
        l: '       5',
        svp: '      7',
        wgcheck: '11.08'
    },
    {
        workgroup_id: 55,
        name: 'Editor, Telegraph',
        dotnum: '132.267-010',
        m: '3',
        l: '       4',
        svp: '      7',
        wgcheck: '11.08'
    },
    {
        workgroup_id: 55,
        name: 'Newscaster',
        dotnum: '131.262-010',
        m: '2',
        l: '       5',
        svp: '      7',
        wgcheck: '11.08'
    },
    {
        workgroup_id: 55,
        name: 'Newswriter',
        dotnum: '131.262-014',
        m: '2',
        l: '       5',
        svp: '      7',
        wgcheck: '11.08'
    },
    {
        workgroup_id: 56,
        name: 'Manager, Advertising',
        dotnum: '164.117-010',
        m: '5',
        l: '       5',
        svp: '      8',
        wgcheck: '11.09'
    },
    {
        workgroup_id: 56,
        name: 'Media Planner',
        dotnum: '164.117-022',
        m: '4',
        l: '5',
        svp: '8',
        wgcheck: '11.09'
    },
    {
        workgroup_id: 56,
        name: 'Dir., Funds Development',
        dotnum: '165.117-014',
        m: '4',
        l: '       5',
        svp: '      7',
        wgcheck: '11.09'
    },
    {
        workgroup_id: 56,
        name: 'Public-Relations Rep.',
        dotnum: '165.167-014',
        m: '4',
        l: '       5',
        svp: '      7',
        wgcheck: '11.09'
    },
    {
        workgroup_id: 56,
        name: 'Supervisor of Sales',
        dotnum: '185.157-014',
        m: '4',
        l: '       4',
        svp: '      7',
        wgcheck: '11.09'
    },
    {
        workgroup_id: 56,
        name: 'Sales-Service Promoter',
        dotnum: '165.167-010',
        m: '3',
        l: '       5',
        svp: '      7',
        wgcheck: '11.09'
    },
    {
        workgroup_id: 56,
        name: 'Employer Relations Rep.',
        dotnum: '166.257-010',
        m: '2',
        l: '       4',
        svp: '      6',
        wgcheck: '11.09'
    },
    {
        workgroup_id: 57,
        name: 'Chief Bank Examiner',
        dotnum: '160.167-046',
        m: '5',
        l: '5',
        svp: '8',
        wgcheck: '11.09'
    },
    {
        workgroup_id: 57,
        name: 'Occup.-Safety/Health Insp.',
        dotnum: '168.167-062',
        m: '5',
        l: '       5',
        svp: '      6',
        wgcheck: '11.10'
    },
    {
        workgroup_id: 57,
        name: 'Industrial Hygienist',
        dotnum: '079.161-010',
        m: '4',
        l: '       5',
        svp: '      8',
        wgcheck: '11.10'
    },
    {
        workgroup_id: 57,
        name: 'Customs Inspector',
        dotnum: '168.267-022',
        m: '4',
        l: '4',
        svp: '6',
        wgcheck: '11.1'
    },
    {
        workgroup_id: 57,
        name: 'Ind.-Safety-&-Health Tech.',
        dotnum: '168.161-014',
        m: '4',
        l: '       4',
        svp: '      6',
        wgcheck: '11.10'
    },
    {
        workgroup_id: 57,
        name: 'Investigator, Fraud',
        dotnum: '376.267-014',
        m: '4',
        l: '       3',
        svp: '      7',
        wgcheck: '11.10'
    },
    {
        workgroup_id: 57,
        name: 'Equal Opportunity Officer',
        dotnum: '168.267-114',
        m: '3',
        l: '       5',
        svp: '      7',
        wgcheck: '11.10'
    },
    {
        workgroup_id: 57,
        name: 'Hazard.-Waste Mgm\'t Spec.',
        dotnum: '168.267-086',
        m: '3',
        l: '       5',
        svp: '      7',
        wgcheck: '11.10'
    },
    {
        workgroup_id: 57,
        name: 'Computer Security Coord.',
        dotnum: '033.162-010',
        m: '3',
        l: '       4',
        svp: '      8',
        wgcheck: '11.10'
    },
    {
        workgroup_id: 57,
        name: 'Fire Inspector',
        dotnum: '373.267-010',
        m: '3',
        l: '       4',
        svp: '      7',
        wgcheck: '11.10'
    },
    {
        workgroup_id: 57,
        name: 'Safety Inspector',
        dotnum: '168.264-014',
        m: '3',
        l: '       4',
        svp: '      6',
        wgcheck: '11.10'
    },
    {
        workgroup_id: 57,
        name: 'Pesticide-Control Inspect.',
        dotnum: '168.267-098',
        m: '2',
        l: '       3',
        svp: '      7',
        wgcheck: '11.10'
    },
    {
        workgroup_id: 57,
        name: 'Agric.-Chemicals Inspect.',
        dotnum: '168.267-082',
        m: '2',
        l: '       3',
        svp: '      7',
        wgcheck: '11.10'
    },
    {
        workgroup_id: 57,
        name: 'Sanitation Inspector',
        dotnum: '168.267-110',
        m: '2',
        l: '       3',
        svp: '      5',
        wgcheck: '11.10'
    },
    {
        workgroup_id: 57,
        name: 'Animal Treatment Investig.',
        dotnum: '379.263-010',
        m: '1',
        l: '       3',
        svp: '      5',
        wgcheck: '11.10'
    },
    {
        workgroup_id: 58,
        name: 'Dietary Manager',
        dotnum: '187.167-206',
        m: '5',
        l: '       5',
        svp: '      8',
        wgcheck: '11.11'
    },
    {
        workgroup_id: 58,
        name: 'Mgr., Financial Institution',
        dotnum: '186.167-086',
        m: '4',
        l: '       5',
        svp: '      8',
        wgcheck: '11.11'
    },
    {
        workgroup_id: 58,
        name: 'Manager, Food Service',
        dotnum: '187.167-106',
        m: '4',
        l: '       4',
        svp: '      7',
        wgcheck: '11.11'
    },
    {
        workgroup_id: 58,
        name: 'Manager, Retail Store',
        dotnum: '185.167-046',
        m: '4',
        l: '       4',
        svp: '      7',
        wgcheck: '11.11'
    },
    {
        workgroup_id: 58,
        name: 'Manager, Title Search',
        dotnum: '186.167-090',
        m: '4',
        l: '4',
        svp: '7',
        wgcheck: '11.11'
    },
    {
        workgroup_id: 58,
        name: 'Mgr., Recreation Estab.',
        dotnum: '187.117-042',
        m: '4',
        l: '4',
        svp: '7',
        wgcheck: '11.11'
    },
    {
        workgroup_id: 58,
        name: 'Svc. Superv., Leased Mach.',
        dotnum: '183.167-030',
        m: '4',
        l: '4',
        svp: '7',
        wgcheck: '11.11'
    },
    {
        workgroup_id: 58,
        name: 'Manager, Hotel or Motel',
        dotnum: '187.117-038',
        m: '4',
        l: '       4',
        svp: '      7',
        wgcheck: '11.11'
    },
    {
        workgroup_id: 58,
        name: 'Mgr., Auto Service Station',
        dotnum: '185.167-014',
        m: '4',
        l: '       4',
        svp: '      7',
        wgcheck: '11.11'
    },
    {
        workgroup_id: 58,
        name: 'Commissary Manager',
        dotnum: '185.167-010',
        m: '4',
        l: '       3',
        svp: '      6',
        wgcheck: '11.11'
    },
    {
        workgroup_id: 58,
        name: 'Dir., Recreation Center',
        dotnum: '195.167-026',
        m: '3',
        l: '       5',
        svp: '      7',
        wgcheck: '11.11'
    },
    {
        workgroup_id: 58,
        name: 'Manager, Warehouse',
        dotnum: '184.167-114',
        m: '3',
        l: '       4',
        svp: '      8',
        wgcheck: '11.11'
    },
    {
        workgroup_id: 58,
        name: 'Manager, Employment Agency',
        dotnum: '187.167-098',
        m: '3',
        l: '       4',
        svp: '      7',
        wgcheck: '11.11'
    },
    {
        workgroup_id: 58,
        name: 'Manager, Apartment House',
        dotnum: '186.167-018',
        m: '3',
        l: '       4',
        svp: '      5',
        wgcheck: '11.11'
    },
    {
        workgroup_id: 58,
        name: 'Manager, Market',
        dotnum: '186.167-042',
        m: '3',
        l: '3',
        svp: '7',
        wgcheck: '11.11'
    },
    {
        workgroup_id: 58,
        name: 'Manager, Camp',
        dotnum: '329.161-010',
        m: '3',
        l: '       3',
        svp: '      7',
        wgcheck: '11.11'
    },
    {
        workgroup_id: 58,
        name: 'Manager, Bowling Alley',
        dotnum: '187.167-222',
        m: '2',
        l: '       3',
        svp: '      5',
        wgcheck: '11.11'
    },
    {
        workgroup_id: 59,
        name: 'Real Estate Agent',
        dotnum: '186.117-058',
        m: '5',
        l: '       5',
        svp: '      8',
        wgcheck: '11.12'
    },
    {
        workgroup_id: 59,
        name: 'Revenue-Settlements Admin.',
        dotnum: '184.117-074',
        m: '5',
        l: '5',
        svp: '8',
        wgcheck: '11.12'
    },
    {
        workgroup_id: 59,
        name: 'Manager, Customer Service',
        dotnum: '168.167-058',
        m: '5',
        l: '       5',
        svp: '      8',
        wgcheck: '11.12'
    },
    {
        workgroup_id: 59,
        name: 'Right-Of-Way Agent',
        dotnum: '191.117-046',
        m: '4',
        l: '       5',
        svp: '      7',
        wgcheck: '11.12'
    },
    {
        workgroup_id: 59,
        name: 'Service Representative',
        dotnum: '191.167-022',
        m: '4',
        l: '       4',
        svp: '      7',
        wgcheck: '11.12'
    },
    {
        workgroup_id: 59,
        name: 'Claims Adjudicator',
        dotnum: '169.267-010',
        m: '4',
        l: '       4',
        svp: '      7',
        wgcheck: '11.12'
    },
    {
        workgroup_id: 59,
        name: 'Contract Administrator',
        dotnum: '162.117-014',
        m: '3',
        l: '       5',
        svp: '      8',
        wgcheck: '11.12'
    },
    {
        workgroup_id: 59,
        name: 'Claim Examiner',
        dotnum: '241.267-018',
        m: '3',
        l: '       4',
        svp: '      7',
        wgcheck: '11.12'
    },
    {
        workgroup_id: 59,
        name: 'Leasing Agent, Outdoor Adv.',
        dotnum: '254.357-010',
        m: '2',
        l: '       3',
        svp: '      4',
        wgcheck: '11.12'
    }
];
