import { firestore } from 'lib/conection'

class Evaluations {
  constructor() {
    this.document = 'evaluations'
  }
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

  async addDocumentEvaluation(payload) {
    try {
      await this._init()
      const evaluationRef = await this.database.collection('evaluations')
      const response = evaluationRef.add(payload)
      return response
    } catch ({ message }) {
      console.error(message)
    }
  }
}

export default Evaluations