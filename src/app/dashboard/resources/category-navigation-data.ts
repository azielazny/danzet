import {AppNavigation} from '../classes/app-navigation';

export class NavigationData {
  name: string;
  navigation: AppNavigation[];
}

export const NAVIGATION_ARRAY: NavigationData[] = [
  {
    name: 'cars-management',
    navigation: [
      {
        name: 'Lista samochodów osobowych',
        tileSize: 'col-4',
        colorScheme: 'tile1',
        link: '/dashboard/(cars-management//side_column:menu/cars-management)'
      },
      {
        name: 'Dodaj samochód ręcznie',
        tileSize: 'col-4',
        colorScheme: 'tile2',
        link: '/dashboard/(add-car//side_column:menu/cars-management)'
      },
      {
        name: 'Dodaj samochód skanując dowód',
        tileSize: 'col-4',
        colorScheme: 'tile3',
        link: '/dashboard'
      }]
  },
  {
    name: 'clients-management',
    navigation: [
      {
        name: 'Lista klientów',
        tileSize: 'col-4',
        colorScheme: 'tile4',
        link:  '/dashboard/(clients-management//side_column:menu/clients-management)'
      },
      {
        name: 'Dodaj klienta',
        tileSize: 'col-4',
        colorScheme: 'tile5',
        link: '/dashboard/(add-client//side_column:menu/clients-management)'
      }
    ]
  },
  {
    name: 'services-management',
    navigation: [
      {
        name: 'Lista usług serwisowych',
        tileSize: 'col-4',
        colorScheme: 'tile6',
        link: '/dashboard'
      },
      {
        name: 'Dodaj usługę serwisową',
        tileSize: 'col-4',
        colorScheme: 'tile7',
        link: '/dashboard'
      },
      {
        name: 'Zamów części z hurtowni',
        tileSize: 'col-4',
        colorScheme: 'tile8',
        link: '/dashboard'
      },
      {
        name: 'Wprowadź części z hurtowni',
        tileSize: 'col-4',
        colorScheme: 'tile1',
        link: '/dashboard'
      },
      {
        name: 'Lista serwisowanych samochodów',
        tileSize: 'col-4',
        colorScheme: 'tile2',
        link: '/dashboard'
      },
      {
        name: 'Dodaj serwis samochodu',
        tileSize: 'col-4',
        colorScheme: 'tile3',
        link: '/dashboard'
      }
    ]
  },
  {
    name: 'reports-management',
    navigation: [
      {
        name: 'Sprzedaż części',
        tileSize: 'col-4',
        colorScheme: 'tile2',
        link: '/dashboard'
      },
      {
        name: 'Zamówienia z hurtowni',
        tileSize: 'col-4',
        colorScheme: 'tile3',
        link: '/dashboard'
      },
      {
        name: 'Stan magazynowy',
        tileSize: 'col-4',
        colorScheme: 'tile4',
        link: '/dashboard'
      },
      {
        name: 'Bilans miesiąca',
        tileSize: 'col-4',
        colorScheme: 'tile5',
        link: '/dashboard'
      },
      {
        name: 'Publiczny raport serwisowy',
        tileSize: 'col-4',
        colorScheme: 'tile6',
        link: '/dashboard'
      }
    ]
  },
  {
    name: 'cars-inspections-management',
    navigation: [
      {
        name: 'Checklista',
        tileSize: 'col-4',
        colorScheme: 'tile7',
        link: '/dashboard'
      },
      {
        name: 'Lista raportów z przeglądów pojazdów',
        tileSize: 'col-4',
        colorScheme: 'tile8',
        link: '/dashboard'
      },
      {
        name: 'Lista nadchodzących przeglądów',
        tileSize: 'col-4',
        colorScheme: 'tile1',
        link: '/dashboard'
      }
    ]
  },
  {
    name: 'messages-management',
    navigation: [
      {
        name: 'Wysłane',
        tileSize: 'col-4',
        colorScheme: 'tile2',
        link: '/dashboard'
      },
      {
        name: 'Wiadomość ogólna dla klienta',
        tileSize: 'col-4',
        colorScheme: 'tile3',
        link: '/dashboard'
      },
      {
        name: 'Wiadomość dotycząca auta',
        tileSize: 'col-4',
        colorScheme: 'tile4',
        link: '/dashboard'
      },
      {
        name: 'Szablony wiadomości',
        tileSize: 'col-4',
        colorScheme: 'tile5',
        link: '/dashboard'
      },
      {
        name: 'Wyślij sms',
        tileSize: 'col-4',
        colorScheme: 'tile6',
        link: '/dashboard'
      }
    ]
  },
  {
    name: 'settings',
    navigation: [
      {
        name: 'Lista użytkowników',
        tileSize: 'col-4',
        colorScheme: 'tile7',
        link: '/dashboard'
      },
      {
        name: 'Dane API',
        tileSize: 'col-4',
        colorScheme: 'tile8',
        link: '/dashboard'
      },
      {
        name: 'Lista hurtowni',
        tileSize: 'col-4',
        colorScheme: 'tile1',
        link: '/dashboard'
      },
      {
        name: 'Dane SMS API ',
        tileSize: 'col-4',
        colorScheme: 'tile2',
        link: '/dashboard'
      },
      {
        name: 'Dane SMTP',
        tileSize: 'col-4',
        colorScheme: 'tile3',
        link: '/dashboard'
      },
      {
        name: 'Usługa publicznego raportu serwisowego',
        tileSize: 'col-4',
        colorScheme: 'tile4',
        link: '/dashboard'
      }
    ]
  }];
