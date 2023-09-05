import { localStorageService } from "./localstorage.service";
import { encoderService } from "./encoder.service";

export const services = {
  localstorage: localStorageService,
  enc: encoderService
}