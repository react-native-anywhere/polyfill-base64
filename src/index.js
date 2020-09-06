import { encode as btoa, decode as atob } from "base-64";

global.btoa = btoa;
global.atob = atob;
