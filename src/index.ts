import css from './css';
import scss from './scss';
import { hasSass } from './utils/resolve';

export = hasSass ? scss : css;
