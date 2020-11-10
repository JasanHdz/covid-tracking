import { firestore } from 'lib/conection'

class Places {
  async _doInitialize() {
    this.database = await firestore
  }

  async _init() {
    if (!this.initializationPromise) {
      this.initializationPromise = this._doInitialize()
    } else {
      return this.initializationPromise
    }
  }
  
  async getCollection() {
    try {
      await this._init()
      const places = await this.database.collection('places').get()
      const data = places.docs.map(document => document.data())
      return data
    } catch ({ message }) {
      console.error(message)
    }
  }
}

export default Places