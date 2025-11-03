import { ViewMode } from "@/data/types/ViewModes";
import { atom } from "jotai";
import { atomWithDefault } from "jotai/utils";


export const viewModeAtom = atom<ViewMode>("Fields")

