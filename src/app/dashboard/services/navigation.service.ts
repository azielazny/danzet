import {Injectable} from '@angular/core';
import {NAVIGATION_ARRAY} from '../resources/category-navigation-data';
import {AppNavigation} from '../interfaces/app-navigation';

@Injectable()
export class NavigationService {

  constructor() {
  }

  getNavigationById(category: string): Promise<AppNavigation[]> {
    return Promise.resolve(NAVIGATION_ARRAY.filter(x => x.name === category).map(x => x.navigation)[0]);
  }

}
