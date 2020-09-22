import { Interest } from './interests.model';
import { artisticIcon, scientificIcon, plantsIcon, protectIcon, mechanicalIcon, industrialIcon, businessIcon, sellingIcon, accommodatingIcon, humanitarianIcon, leadingIcon, physicalIcon } from './svg';


export const interests: Interest[] = [
    {
        interestCategory: 'Art',
        name: 'Artistic',
        description: 'An interest in the creative expression of feelings or ideas.',
        color: '#ee509c',
        svgLogo: artisticIcon,
        scoring: [{
            type: 'T',
            percentiles: [9, 24, 35, 43, 49, 57, 64, 71, 75, 79, 84, 90, 93, 96, 99]
        }],
        plikes: 33
    },
    {
        interestCategory: 'Sci',
        name: 'Scientific',
        description: 'An interest in discovering, collecting, and analyzing information about the natural world, and in applying scientific research findings to problems in medicine, the life sciences, and the natural sciences.',
        color: '#82c55b',
        svgLogo: scientificIcon,
        scoring: [{
            type: 'T',
            percentiles: [14, 32, 42, 49, 56, 62, 69, 76, 79, 82, 85, 89, 94, 99, null]
        }],
        plikes: 93
    },
    {
        interestCategory: 'Pla',
        name: 'Plants/Animals',
        description: 'An interest in working with plants and animals, usually outdoors.',
        color: '#00a88e',
        svgLogo: plantsIcon,
        scoring: [{
            type: 'T',
            percentiles: [14,35,47,56,65,73,80,86,90,93,96,99,null,null,null]
        }],
        plikes: 31
    },
    {
        interestCategory: 'Prt',
        name: 'Protective',
        description: 'An interest in using authority to protect people and property.',
        color: '#2b3c73',
        svgLogo: protectIcon,
        scoring: [{
            type: 'T',
            percentiles: [11,30,41,51,59,66,74,81,86,91,93,96,99,null,null]
        }],
        plikes: 62
    },
    {
        interestCategory: 'Mch',
        name: 'Mechanical',
        description: 'An interest in applying mechanical principles to practical situations by use of machines or hand tools.',
        color: '#9676b5',
        svgLogo: mechanicalIcon,
        scoring: [{
            type: 'T',
            percentiles: [13,31,42,51,58,64,72,79,84,88,90,94,97,null,null]
        }],
        plikes: 7
    },
    {
        interestCategory: 'Ind',
        name: 'Industrial',
        description: 'An interest in repetitive, concrete, organized activities done in a factory setting.',
        color: '#9aa2ae',
        svgLogo: industrialIcon,
        scoring: [{
            type: 'T',
            percentiles: [19,47,61,70,75,80,84,87,90,93,95,97,99,null,null]
        }],
        plikes: 62
    },
    {
        interestCategory: 'Bus',
        name: 'Business Detail',
        description: 'An interest in organized, clearly defined activities requiring accuracy and attention to details, primarily in an office setting.',
        color: '#006fba',
        svgLogo: businessIcon,
        scoring: [{
            type: 'T',
            percentiles: [11,26,36,42,50,57,63,69,74,79,86,92,97,null,null]
        }],
        plikes: 94
    },
    {
        interestCategory: 'Sel',
        name: 'Selling',
        description: 'An interest in bringing others to a particular point of view by personal persuasion, using sales and promotional techniques.',
        color: '#005c27',
        svgLogo: sellingIcon,
        scoring: [{
            type: 'T',
            percentiles: [12,33,47,60,68,74,80,86,90,95,98,null,null,null,null]
        }],
        plikes: 80
    },
    {
        interestCategory: 'Acc',
        name: 'Accommodating',
        description: 'An interest in catering to the wishes and needs of others, usually on a one-to-one basis.',
        color: '#7d002e',
        svgLogo: accommodatingIcon,
        scoring: [{
            type: 'T',
            percentiles: [12,30,45,56,66,76,84,90,93,96,98,null,null,null,null]
        }],
        plikes: 60
    },
    {
        interestCategory: 'Hum',
        name: 'Humanitarian',
        description: 'An interest in helping others with their mental, spiritual, social, physical, or vocational needs.',
        color: '#69489d',
        svgLogo: humanitarianIcon,
        scoring: [{
            type: 'T',
            percentiles: [14,29,39,48,54,61,67,72,78,84,88,94,null,null,null]
        }],
        plikes: 21
    },
    {
        interestCategory: 'Ldi',
        name: 'Leading/Influencing',
        description: 'An interest in leading and influencing others by using high-level verbal or numerical abilities.',
        color: '#deb407',
        svgLogo: leadingIcon,
        scoring: [{
            type: 'T',
            percentiles: [7,18,26,35,45,54,60,68,74,77,82,86,91,96,99]
        }],
        plikes: 81
    },
    {
        interestCategory: 'Phy',
        name: 'Physical Performing',
        description: ' ',
        color: '#00aeef',
        svgLogo: physicalIcon,
        scoring: [{
            type: 'T',
            percentiles: [15,40,55,66,76,84,88,92,95,97,99,null,null,null,null]
        }],
        plikes: 14
    }
];