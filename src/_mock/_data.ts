import {
  _id,
  _price,
  _times,
  _company,
  _boolean,
  _fullName,
  _taskNames,
  _postTitles,
  _description,
  _productNames,
} from './_mock';

// ----------------------------------------------------------------------

export const _myAccount = {
  displayName: 'Lucifer Morningstar',
  email: 'demon-king@hell.com',
  photoURL: '/assets/images/avatar/avatar-25.webp',
};

// ----------------------------------------------------------------------

export const _users = [...Array(24)].map((_, index) => ({
  id: _id(index),
  name: _fullName(index),
  company: _company(index),
  isVerified: _boolean(index),
  avatarUrl: `/assets/images/avatar/avatar-${index + 1}.webp`,
  status: index % 4 ? 'active' : 'banned',
  role:
    [
      'Leader',
      'Hr Manager',
      'UI Designer',
      'UX Designer',
      'UI/UX Designer',
      'Project Manager',
      'Backend Developer',
      'Full Stack Designer',
      'Front End Developer',
      'Full Stack Developer',
    ][index] || 'UI Designer',
}));

// ----------------------------------------------------------------------

export const _posts = [...Array(23)].map((_, index) => ({
  id: _id(index),
  title: _postTitles(index),
  description: _description(index),
  coverUrl: `/assets/images/cover/cover-${index + 1}.webp`,
  totalViews: 8829,
  totalComments: 7977,
  totalShares: 8556,
  totalFavorites: 8870,
  postedAt: _times(index),
  author: {
    name: _fullName(index),
    avatarUrl: `/assets/images/avatar/avatar-${index + 1}.webp`,
  },
}));

// ----------------------------------------------------------------------

const COLORS = [
  '#00AB55',
  '#000000',
  '#FFFFFF',
  '#FFC0CB',
  '#FF4842',
  '#1890FF',
  '#94D82D',
  '#FFC107',
];

export const _products = [...Array(24)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: _id(index),
    price: _price(index),
    name: _productNames(index),
    priceSale: setIndex % 3 ? null : _price(index),
    coverUrl: `/assets/images/product/product-${setIndex}.webp`,
    colors:
      (setIndex === 1 && COLORS.slice(0, 2)) ||
      (setIndex === 2 && COLORS.slice(1, 3)) ||
      (setIndex === 3 && COLORS.slice(2, 4)) ||
      (setIndex === 4 && COLORS.slice(3, 6)) ||
      (setIndex === 23 && COLORS.slice(4, 6)) ||
      (setIndex === 24 && COLORS.slice(5, 6)) ||
      COLORS,
    status:
      ([1, 3, 5].includes(setIndex) && 'sale') || ([4, 8, 12].includes(setIndex) && 'new') || '',
  };
});

// ----------------------------------------------------------------------

export const _langs = [
  {
    value: 'en',
    label: 'English',
    icon: '/assets/icons/flags/ic-flag-en.svg',
  },
  {
    value: 'de',
    label: 'German',
    icon: '/assets/icons/flags/ic-flag-de.svg',
  },
  {
    value: 'fr',
    label: 'French',
    icon: '/assets/icons/flags/ic-flag-fr.svg',
  },
];

// ----------------------------------------------------------------------

export const _timeline = [...Array(5)].map((_, index) => ({
  id: _id(index),
  title: [
    '1983, orders, $4220',
    '12 Invoices have been paid',
    'Order #37745 from September',
    'New order placed #XF-2356',
    'New order placed #XF-2346',
  ][index],
  type: `order${index + 1}`,
  time: _times(index),
}));

export const _traffic = [
  {
    value: 'facebook',
    label: 'Facebook',
    total: 19500,
  },
  {
    value: 'google',
    label: 'Google',
    total: 91200,
  },
  {
    value: 'linkedin',
    label: 'Linkedin',
    total: 69800,
  },
  {
    value: 'twitter',
    label: 'Twitter',
    total: 84900,
  },
];

export const _tasks = Array.from({ length: 5 }, (_, index) => ({
  id: _id(index),
  name: _taskNames(index),
}));

// ----------------------------------------------------------------------

export const _notifications = [
  {
    id: _id(1),
    title: 'Your order is placed',
    description: 'waiting for shipping',
    avatarUrl: null,
    type: 'order-placed',
    postedAt: _times(1),
    isUnRead: true,
  },
  {
    id: _id(2),
    title: _fullName(2),
    description: 'answered to your comment on the Minimal',
    avatarUrl: '/assets/images/avatar/avatar-2.webp',
    type: 'friend-interactive',
    postedAt: _times(2),
    isUnRead: true,
  },
  {
    id: _id(3),
    title: 'You have new message',
    description: '5 unread messages',
    avatarUrl: null,
    type: 'chat-message',
    postedAt: _times(3),
    isUnRead: false,
  },
  {
    id: _id(4),
    title: 'You have new mail',
    description: 'sent from Guido Padberg',
    avatarUrl: null,
    type: 'mail',
    postedAt: _times(4),
    isUnRead: false,
  },
  {
    id: _id(5),
    title: 'Delivery processing',
    description: 'Your order is being shipped',
    avatarUrl: null,
    type: 'order-shipped',
    postedAt: _times(5),
    isUnRead: false,
  },
];

// -------------------------------------------------------------------------

export const _prescriptions = [
  {
    id: 1,
    queue_id: 1,
    name: 'John Doe',
    phone: '+1234567890',
    prescription: 'Generic Pain Relief 30mg Tablet',
    notified: true,
    pickup_time: '2023-10-05T14:30:00Z',
  },
  {
    id: 2,
    queue_id: 2,
    name: 'Jane Smith',
    phone: '+1987654321',
    prescription: 'Aspirin 81mg Capsule',
    notified: false,
    pickup_time: '2023-10-05T15:15:00Z',
  },
  {
    id: 3,
    queue_id: 3,
    name: 'Michael Johnson',
    phone: '+1456789012',
    prescription: 'Cough & Cold Solution',
    notified: true,
    pickup_time: '2023-10-05T16:00:00Z',
  },
  {
    id: 4,
    queue_id: 4,
    name: 'Emily Davis',
    phone: '+1321654987',
    prescription: 'Antibiotic 250mg Tablet',
    notified: false,
    pickup_time: '2023-10-05T17:45:00Z',
  },
  {
    id: 5,
    queue_id: 5,
    name: 'David Wilson',
    phone: '+1987654321',
    prescription: 'Vaseline Cream',
    notified: true,
    pickup_time: '2023-10-05T18:30:00Z',
  },
  {
    id: 6,
    queue_id: 6,
    name: 'Sarah Lee',
    phone: '+1456789012',
    prescription: 'Laxative 2g Tablet',
    notified: false,
    pickup_time: '2023-10-05T19:15:00Z',
  },
  {
    id: 7,
    queue_id: 7,
    name: 'Michael Brown',
    phone: '+1876543210',
    prescription: 'Antidepressant 50mg Tablet',
    notified: true,
    pickup_time: '2023-10-05T20:00:00Z',
  },
  {
    id: 8,
    queue_id: 8,
    name: 'Jessica Miller',
    phone: '+1654321987',
    prescription: 'Cold Medicine 10mg Tablet',
    notified: false,
    pickup_time: '2023-10-05T21:30:00Z',
  },
  {
    id: 9,
    queue_id: 9,
    name: 'Daniel Green',
    phone: '+1456789012',
    prescription: 'Painkiller 100mg Tablet',
    notified: true,
    pickup_time: '2023-10-05T22:15:00Z',
  },
  {
    id: 10,
    queue_id: 10,
    name: 'Olivia Taylor',
    phone: '+1456789012',
    prescription: 'Allergy Medicine 10mg Tablet',
    notified: false,
    pickup_time: '2023-10-05T23:00:00Z',
  },
];
