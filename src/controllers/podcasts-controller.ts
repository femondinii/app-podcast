import { IncomingMessage, ServerResponse } from "http";
import { ContentType } from "../utils/content-type";
import { serviceListEpisodes } from "../services/list-episodes-service";
import { serviceFilterEpisodes } from "../services/filter-episodes-service";
import { PodcastTransferModel } from "../models/podcast-transfer-model";

const DEFAULT_CONTENT = { 'Content-Type': ContentType.JSON };

export const getListEpisodes = async (
    _: IncomingMessage,
    res: ServerResponse
) => {
    const content: PodcastTransferModel = await serviceListEpisodes();
    res.writeHead(content.statusCode, DEFAULT_CONTENT);
    res.write(JSON.stringify(content.body));

    res.end();
}

export const getFilterEpisodes = async (
    req: IncomingMessage,
    res: ServerResponse
) => {
    const content: PodcastTransferModel = await serviceFilterEpisodes(req.url);
    res.writeHead(content.statusCode, DEFAULT_CONTENT);
    res.write(JSON.stringify(content.body));

    res.end();
}