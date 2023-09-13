import * as SecureStore from "expo-secure-store";
export const Helper = {
  /**
   * Use to save data in local storage
   */
  Secure: {
    async remove(key: string) {
      await SecureStore.deleteItemAsync(key);
      try {
      } catch (error) {
        if (__DEV__) {
          console.log(error);
        }
      }
    },
    async setString(key: string, value: string) {
      try {
        await SecureStore.setItemAsync(key, value);
      } catch (error) {
        if (__DEV__) {
          console.log(error);
        }
      }
    },

    async setObject(key: string, value: Object) {
      const jsonStr = JSON.stringify(value || {});
      await this.setString(key, jsonStr);
    },

    async getString(key: string) {
      try {
        await SecureStore.getItemAsync(key);
      } catch (error) {
        if (__DEV__) {
          console.log(error);
        }
      }
      return "";
    },

    async getObj(key: string) {
      try {
        const jsonStr = await SecureStore.getItemAsync(key);
        if (jsonStr !== null) {
          return JSON.parse(jsonStr);
        }
      } catch (error) {
        if (__DEV__) {
          console.log(error);
        }
      }
      return {};
    },
  },
};
