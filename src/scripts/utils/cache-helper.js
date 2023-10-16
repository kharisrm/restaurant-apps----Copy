import CONFIG from '../globals/config';

const CacheHelper = {
  async cachingAppShell(requests) {
    const cache = await this._openCache();

    try {
      await Promise.all(requests.map(request => cache.add(request)));
    } catch (error) {
      console.error('Failed to cache some assets:', error);
    }
  },

  async deleteOldCache() {
    const cacheNames = await caches.keys();

    try {
      await Promise.all(
        cacheNames
          .filter(name => name !== CONFIG.CACHE_NAME)

          .map(filteredName => caches.delete(filteredName))
      );
    } catch (error) {
      console.error('Failed to delete old cache:', error);
    }
  },

  async revalidateCache(request) {
    try {
      const response = await caches.match(request);

      if (response) {
        return response;
      }

      return this._fetchRequest(request);
    } catch (error) {
      console.error('Error revalidating cache:', error);
      // Menambahkan return statement untuk memenuhi aturan consistent-return
      return null;
    }
  },

  async _openCache() {
    return caches.open(CONFIG.CACHE_NAME);
  },

  async _fetchRequest(request) {
    try {
      const response = await fetch(request);

      if (!response || response.status !== 200) {
        return response;
      }

      await this._addCache(request);
      return response;
    } catch (error) {
      console.error('Error fetching request:', error);
      // Menambahkan return statement untuk memenuhi aturan consistent-return
      return null;
    }
  },

  async _addCache(request) {
    const cache = await this._openCache();

    try {
      await cache.add(request);
      // Menambahkan return statement untuk memenuhi aturan consistent-return
      return true;
    } catch (error) {
      console.error('Failed to add request to cache:', error);
      // Menambahkan return statement untuk memenuhi aturan consistent-return
      return null;
    }
  }
};

export default CacheHelper;
