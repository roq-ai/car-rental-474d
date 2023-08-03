import * as yup from 'yup';

export const performanceValidationSchema = yup.object().shape({
  usage_data: yup.string().required(),
  demand_data: yup.string().required(),
  vehicle_id: yup.string().nullable().required(),
});
