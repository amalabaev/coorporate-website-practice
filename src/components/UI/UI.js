import BaseButton from "./buttons/BaseButton"
import ButtonLink from "./buttons/ButtonLink"
import BaseLabel from "./labels/BaseLabel"
import BaseRadio from "./checkboxes/BaseRadio"
import BaseSelect from "./fields/BaseSelect"
import BaseField from "./fields/BaseField"
import BaseModal from "./modal/BaseModal"

export default [
  {name: 'base-button', component: BaseButton},
  {name: 'base-label', component: BaseLabel},
  {name: 'base-field', component: BaseField},
  {name: 'base-radio', component: BaseRadio},
  {name: 'base-select', component: BaseSelect},
  {name: 'button-link', component: ButtonLink},
  {name: 'base-modal', component: BaseModal},
]