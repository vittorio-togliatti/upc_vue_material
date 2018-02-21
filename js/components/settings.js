const SettingsTemplate = {props: [], 
                          data: () => ({
        radio: false,
        active: false,
        value: null,
        primary: [
                  'Orange',
                  'Apple',
                  'Pineapple'
                ],
        accent: [
                  'Cat',
                  'Dog',
                  'Rabbit'
                ]
    }),
        methods: {
              onConfirm () {
                this.value = 'Agreed'
              },
              onCancel () {
                this.value = 'Disagreed'
              }
        },
        template:`

        <div>
                <div>
                    <md-button class="md-icon-button">
                        <md-icon>home</md-icon>
                    </md-button>

                    <md-button class="md-icon-button md-accent">
                        <md-icon>thumb_up</md-icon>
                    </md-button>
                </div>

                <div>
                    <md-radio v-model="radio" :value="false">Boolean</md-radio>
                    <md-radio v-model="radio" value="my-radio">String</md-radio>
                    <md-radio v-model="radio">No Value</md-radio>
                    <md-radio v-model="radio" disabled>Disabled</md-radio>

                    <small>Model value: {{ radio }}</small>
                </div>

                <div>
                    <md-dialog-confirm
                      :md-active.sync="active"
                      md-title="Use Google's location service?"
                      md-content="Let Google help apps determine location. <br> This means sending <strong>anonymous</strong> location data to Google, even when no apps are running."
                      md-confirm-text="Agree"
                      md-cancel-text="Disagree"
                      @md-cancel="onCancel"
                      @md-confirm="onConfirm" />

                    <md-button class="md-primary md-raised" @click="active = true">Confirm</md-button>
                    <span v-if="value">Value: {{ value }}</span>
                </div>

                <div>
                    <span><md-chip class="md-primary" v-for="chip in primary" :key="chip">{{ chip }}</md-chip></span>
                    <span><md-chip class="md-accent" v-for="chip in accent" :key="chip" md-clickable>{{ chip }}</md-chip></span>
                </div>
        </div>
`
                     };