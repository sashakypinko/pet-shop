import StorageService from '../storage-service';
import { ThemeEnum } from '../../../configs/theme/enums/theme.enum';

class PreferenceStorageService extends StorageService {
  changeThemeMode = (mode: ThemeEnum): void => {
    this.store('mode', mode);
  };

  getThemeMode = (): ThemeEnum | null => this.get('mode');
}

export const PreferenceStorage = new PreferenceStorageService('preferences');
