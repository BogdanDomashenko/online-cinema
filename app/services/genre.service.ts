import { axiosClassic } from "api/inteceptors";

import { IGenre } from "@/shared/types/movie.types";

import { getGenresUrl } from "@/config/api.config";

export const GenreService = {
	async getAll(searchTerm?: string) {
		return axiosClassic.get<IGenre[]>(getGenresUrl(""), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		});
	},
};
