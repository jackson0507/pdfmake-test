import { Interest } from './interests.model';
import { artisticIcon, scientificIcon, plantsIcon, protectIcon, mechanicalIcon, industrialIcon, businessIcon, sellingIcon, accommodatingIcon, humanitarianIcon, leadingIcon, physicalIcon, artisticPillIcon, scientificPillIcon, plantsPillIcon, protectPillIcon, mechanicalPillIcon, industrialPillIcon, businessPillIcon, sellingPillIcon, accommodatingPillIcon, humanitarianPillIcon, leadingPillIcon, physicalPillIcon  } from './svg';

export const interests: Interest[] = [
    {
        id: 1,
        interestCategory: 'Art',
        name: 'Artistic',
        description: 'An interest in the creative expression of feelings or ideas.',
        exampleProfessions: 'Writer, Painter, Actor, Editor, Dancer, Singer, Graphic Designer, Set Designer',
        color: '#ee509c',
        svgLogo: artisticIcon,
        pillLogo: artisticPillIcon,
        scoring: [{
            type: 'T',
            percentiles: [9, 24, 35, 43, 49, 57, 64, 71, 75, 79, 84, 90, 93, 96, 99]
        }],
        plikes: 33
    },
    {
        id: 2,
        interestCategory: 'Sci',
        name: 'Scientific',
        description: 'An interest in discovering, collecting, and analyzing information about the natural world, and in applying scientific research findings to problems in medicine, the life sciences, and the natural sciences.',
        exampleProfessions: 'Physician, Audiologist, Veterinarian, Biologist, Chemist, Speech Pathologist, Laboratory Technician',
        color: '#82c55b',
        svgLogo: scientificIcon,
        pillLogo: scientificPillIcon,
        scoring: [{
            type: 'T',
            percentiles: [14, 32, 42, 49, 56, 62, 69, 76, 79, 82, 85, 89, 94, 99, null]
        }],
        plikes: 93
    },
    {
        id: 3,
        interestCategory: 'Pla',
        name: 'Plants/Animals',
        description: 'An interest in working with plants and animals, usually outdoors.',
        exampleProfessions: 'Gardener, Animal Groomer, Landscaper, Forester, Animal Caretaker',
        color: '#00a88e',
        svgLogo: plantsIcon,
        pillLogo: plantsPillIcon,
        scoring: [{
            type: 'T',
            percentiles: [14,35,47,56,65,73,80,86,90,93,96,99,null,null,null]
        }],
        plikes: 31
    },
    {
        id: 4,
        interestCategory: 'Prt',
        name: 'Protective',
        description: 'An interest in using authority to protect people and property.',
        exampleProfessions: 'Police Officer, Private Investigator, Security Guard, Bodyguard, Park Ranger, Correctional Officer',
        color: '#2b3c73',
        svgLogo: protectIcon,
        pillLogo: protectPillIcon,
        scoring: [{
            type: 'T',
            percentiles: [11,30,41,51,59,66,74,81,86,91,93,96,99,null,null]
        }],
        plikes: 62
    },
    {
        id: 5,
        interestCategory: 'Mch',
        name: 'Mechanical',
        description: 'An interest in applying mechanical principles to practical situations by use of machines or hand tools.',
        exampleProfessions: 'Electrical Engineer, Architect, Carpenter, Chef, Mechanic, Ambulance Driver, Project Engineer, Computer Equipment Repairer',
        color: '#9676b5',
        svgLogo: mechanicalIcon,
        pillLogo: mechanicalPillIcon,
        scoring: [{
            type: 'T',
            percentiles: [13,31,42,51,58,64,72,79,84,88,90,94,97,null,null]
        }],
        plikes: 7
    },
    {
        id: 6,
        interestCategory: 'Ind',
        name: 'Industrial',
        description: 'An interest in repetitive, concrete, organized activities done in a factory setting.',
        exampleProfessions: 'Machinist, Dry Cleaner, Baker, Welder, Laborer, Lathe Operator, Hand Packager',
        color: '#9aa2ae',
        svgLogo: industrialIcon,
        pillLogo: industrialPillIcon,
        scoring: [{
            type: 'T',
            percentiles: [19,47,61,70,75,80,84,87,90,93,95,97,99,null,null]
        }],
        plikes: 62
    },
    {
        id: 7,
        interestCategory: 'Bus',
        name: 'Business Detail',
        description: 'An interest in organized, clearly defined activities requiring accuracy and attention to details, primarily in an office setting.',
        exampleProfessions: 'Bill Collector, Secretary, Receptionist, Customer Service Representative, Health Information Technician',
        color: '#006fba',
        svgLogo: businessIcon,
        pillLogo: businessPillIcon,
        scoring: [{
            type: 'T',
            percentiles: [11,26,36,42,50,57,63,69,74,79,86,92,97,null,null]
        }],
        plikes: 94
    },
    {
        id: 8,
        interestCategory: 'Sel',
        name: 'Selling',
        description: 'An interest in bringing others to a particular point of view by personal persuasion, using sales and promotional techniques.',
        exampleProfessions: 'Sales Representative, Stadium Vendor, Clothing Salesperson, Telephone Solicitor, Financial Planner',
        color: '#005c27',
        svgLogo: sellingIcon,
        pillLogo: sellingPillIcon,
        scoring: [{
            type: 'T',
            percentiles: [12,33,47,60,68,74,80,86,90,95,98,null,null,null,null]
        }],
        plikes: 80
    },
    {
        id: 9,
        interestCategory: 'Acc',
        name: 'Accommodating',
        description: 'An interest in catering to the wishes and needs of others, usually on a one-to-one basis.',
        exampleProfessions: 'Manicurist, Restaurant Host, Waiter, Waitress, Personal Shopper, Flight Attendant',
        color: '#7d002e',
        svgLogo: accommodatingIcon,
        pillLogo: accommodatingPillIcon,
        scoring: [{
            type: 'T',
            percentiles: [12,30,45,56,66,76,84,90,93,96,98,null,null,null,null]
        }],
        plikes: 60
    },
    {
        id: 10,
        interestCategory: 'Hum',
        name: 'Humanitarian',
        description: 'An interest in helping others with their mental, spiritual, social, physical, or vocational needs.',
        exampleProfessions: 'Home Care Aide, Physical Therapist, Nurse, Medical Assistant, Child Care Worker, Dental Hygienist, Counselor, Probation Officer',
        color: '#69489d',
        svgLogo: humanitarianIcon,
        pillLogo: humanitarianPillIcon,
        scoring: [{
            type: 'T',
            percentiles: [14,29,39,48,54,61,67,72,78,84,88,94,null,null,null]
        }],
        plikes: 21
    },
    {
        id: 11,
        interestCategory: 'Ldi',
        name: 'Leading/Influencing',
        description: 'An interest in leading and influencing others by using high-level verbal or numerical abilities.',
        exampleProfessions: 'Database Administrator, Paralegal, Teacher, Computer Engineer, Lawyer, Stock Broker, Computer Programmer',
        color: '#deb407',
        svgLogo: leadingIcon,
        pillLogo: leadingPillIcon,
        scoring: [{
            type: 'T',
            percentiles: [7,18,26,35,45,54,60,68,74,77,82,86,91,96,99]
        }],
        plikes: 81
    },
    {
        id: 12,
        interestCategory: 'Phy',
        name: 'Physical Performing',
        description: 'An interest in physical activities performed before an audience, such as sports or daring physical feats.',
        exampleProfessions: 'Athlete, Coach, Movie Stunt Performer, Juggler, Sports Instructor',
        color: '#00aeef',
        svgLogo: physicalIcon,
        pillLogo: physicalPillIcon,
        scoring: [{
            type: 'T',
            percentiles: [15,40,55,66,76,84,88,92,95,97,99,null,null,null,null]
        }],
        plikes: 14
    }
];