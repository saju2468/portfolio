import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";
import { Project, getAllProjects } from "@/data/projects";
import type { RootState } from "../index";

export interface ProjectState {
  allProjects: Project[];
  selectedCategory: string;
  searchQuery: string;
}

const initialState: ProjectState = {
  allProjects: getAllProjects(),
  selectedCategory: "ALL",
  searchQuery: "",
};

export const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setSelectedCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    resetFilters: (state) => {
      state.selectedCategory = "ALL";
      state.searchQuery = "";
    },
  },
});

export const { setSelectedCategory, setSearchQuery, resetFilters } =
  projectSlice.actions;

// Selectors
const selectAllProjects = (state: RootState) => state.projects.allProjects;
const selectSelectedCategory = (state: RootState) =>
  state.projects.selectedCategory;
const selectSearchQuery = (state: RootState) => state.projects.searchQuery;

export const selectFilteredProjects = createSelector(
  [selectAllProjects, selectSelectedCategory, selectSearchQuery],
  (projects, category, query) => {
    const trimmedQuery = query.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesCategory =
        category === "ALL" || project.category === category;

      if (!matchesCategory) return false;

      if (!trimmedQuery) return true;

      const titleMatch = project.title.toLowerCase().includes(trimmedQuery);
      const descMatch = project.description.toLowerCase().includes(trimmedQuery);
      const techMatch = project.technologies.toLowerCase().includes(trimmedQuery);
      const tagMatch = project.tags.some((tag) =>
        tag.toLowerCase().includes(trimmedQuery)
      );

      return titleMatch || descMatch || techMatch || tagMatch;
    });
  }
);

export default projectSlice.reducer;

