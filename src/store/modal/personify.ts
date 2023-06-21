type StepModal = 'voice' | 'tone' | 'audience' | 'personalize' | 'personify';

export const usePersonifyModalStore = defineStore('personifymodal', {
    state: () => ({ step:  'voice', showModal: false}),
    getters: {
      firstStep(state) {
          return state.step == "voice"
      },
      lastStep(state) {
          return state.step == "personify"
      }
    },
    actions: {
      setStep(step: StepModal) {
        this.step = step;
      },
      next() {
        switch (this.step) {
          case "voice":
            this.step = "tone"
            break;
          case "tone":
            this.step = "audience"
            break;
          case "audience":
            this.step = "personalize"
            break;
          case "personalize":
            this.step = "personify"
            break;
          default:
            break;
        }
      },
      previous() {
        switch (this.step) {
          case "personify":
            this.step = "personalize"
            break;
          case "personalize":
            this.step = "audience"
            break;
          case "audience":
            this.step = "tone"
            break;
          case "tone":
            this.step = "voice"
            break;
          default:
            break;
        }
      }
    },
  })