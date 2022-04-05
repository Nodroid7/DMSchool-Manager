import { InjectionToken } from '@angular/core';
import { IManagerConfig } from './imanager.config';

export const MANAGER_CONFIG = new InjectionToken('manager.config');
export const ManagerConfig: IManagerConfig = {

    /*local*/
    endPoints : {
        server: 'http://localhost:3000/',
        manager: 'http://localhost:4200/',
        parent: 'http://localhost:8000/'
    }
    /*****/

    /*server*/
        // server: 'http://localhost:3000/',
        // manager: 'http://localhost:4200/',
        // parent: 'http://localhost:8000/'
    /****/

};
