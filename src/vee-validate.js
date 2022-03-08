import { extend, localize } from "vee-validate";
import { min, required, email } from "vee-validate/dist/rules";

// Install rules
extend("required", required);
extend("min", min);
extend("email", email);

// Install messages
localize({
  en: {
    messages: {
      required: "required",
      email: "invalid email",
      min: "min {length} symbol",
      max: (_, { length }) =>
        `this field must have no more than ${length} characters`,
    },
  },
});
