import {Injectable} from '@angular/core';
import {NAVIGATION_ARRAY} from '../resources/category-navigation-data';
import {AppNavigation} from '../classes/app-navigation';

@Injectable()
export class NavigationService {

  constructor() {
  }

  getNavigationById(category: string): Promise<AppNavigation[]> {
    return Promise.resolve(NAVIGATION_ARRAY.filter(x => x.name === category).map(x => x.navigation)[0]);
  }

}
