import { create } from "zustand";

interface StudyInfo {
  subject: string;
  topic: string;
  chapter: string;
  note: string;
  updateForm: (formData: Partial<StudyInfo>) => void;
  resetForm: () => void;
  //   files: FileType[];
  //   updateFiles: (file: StudyInfo["files"][number]) => void;
  //   removeFile: (fileUrl: string) => void;
}

export const useCreatePostStore = create<StudyInfo>((set) => ({
  subject: "HANDYMAN",
  topic: "",
  chapter: "",
  note: "",
  postcode: "",

  updateForm: (formData) =>
    set((state) => {
      console.log("update form states", formData);
      return { ...state, ...formData };
    }),

  resetForm: () =>
    set(() => ({
      subject: "HANDYMAN",
      topic: "",
      chapter: "",
      note: "",
      postcode: "",
    })),

  //   updateFiles: (newFile) =>
  //     set((state) => {
  //       const updatedFiles = state.files ? [...state.files, newFile] : [newFile];
  //       return { ...state, files: updatedFiles };
  //     }),
  // Function to remove a file
  //   removeFile: (fileUrl: string) =>
  //     set((state) => {
  //       const updatedFiles = state.files.filter((file) => file.url !== fileUrl);
  //       return { ...state, files: updatedFiles };
  //     }),
}));
