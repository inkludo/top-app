import CoursesIcon from './icons/courses.svg';
import ServicesIcon from './icons/services.svg';
import BooksIcon from './icons/books.svg';
import ProductsIcon from './icons/products.svg';
import { LevelCategory } from '../interfaces/page.interface';
import { FirstLevelMenuItem } from '../interfaces/menu.interface';

const EXCHANGE_RATE_USD = 71.8;

export const firstLevelMenu: FirstLevelMenuItem[] = [
	{ route: 'courses', name: 'Courses', icon: <CoursesIcon />, id: LevelCategory.Courses },
	{ route: 'services', name: 'Services', icon: <ServicesIcon />, id: LevelCategory.Services },
	{ route: 'books', name: 'Books', icon: <BooksIcon />, id: LevelCategory.Books },
	{ route: 'products', name: 'Products', icon: <ProductsIcon />, id: LevelCategory.Products }
];

export const priceUSD = (price: number): string =>
	Math.floor((price / EXCHANGE_RATE_USD))
		.toString()
		.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
		.concat(' $');