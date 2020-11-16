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
      const places = await this.database.collection('places').limit(10).get()
      const data = places.docs.map(document => ({ uid: document.id, ...document.data() }))
      return data
    } catch ({ message }) {
      console.error(message)
    }
  }
  
  async getCollectionById(id) {
    try {
      await this._init()
      const place = await this.database.collection('places').doc(id).get()
      if (!place.exists) return null
      const data = { ...place.data(), uid: place.id }
      return data
    } catch ({ message }) {
      console.error(message)
    }
  }

  async getCollectionByEstado(query) {
    try {
      await this._init()
      const colonieRef = await this.database.collection('places')
      const colonies = await colonieRef.where("colonia", "==", query).where("colonia", "==", query.toUpperCase()).get()
      const data = colonies.docs.map(doc => ({ uid: doc.id, ...doc.data() }))
      return data
    } catch ({ message }) {
      console.error(message)
    }
  }
  
  async addDocument(payload) {
    try {
      await this._init()
      const colonieRef = await this.database.collection('places')
      const response = colonieRef.add(payload)
      return response
    } catch ({ message }) {
      console.error(message)
    } 
  }

  async updateDocumentByUid(id, payload) {
    try {
      await this._init()
      const colonieRef = await this.database.collection('places').doc(id)
      const response = colonieRef.update(payload)
      return response
    } catch ({ message }) {
      console.error(message)
    }
  }

  async deleteDocumentByUid(id) {
    try {
      await this._init()
      const colonieRef = await this.database.collection('places').doc(id)
      const response = colonieRef.delete()
      return response
    } catch ({ message }) {
      console.error(message)
    } 
  }
}

export default Places