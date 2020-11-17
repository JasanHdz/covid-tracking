import { firestore } from 'lib/conection'

class Evaluations {
  constructor() {
    this.document = 'evaluations'
  }
  async _doInitialize() {
    this.database = await firestore
  }

  async _init() {
    if (!_this.initializationPromise) {
      this.initializationPromise = this._doInitialize()
    } else {
      return this.initializationPromise
    }
  }

  async addDocumentEvaluation(payload) {
    try {
      await this._init()
      const evaluationRef = await this.database.collection(this.document)
      const response = evaluationRef.add(payload)
      return response
    } catch ({ message }) {
      console.error(message)
    }
  }
}

export default Evaluations