import { Region } from '../model';


export class Utils {
    public static GetPathfromRegion(region: Region): string {
        switch (region) {
            case Region.Us:
                return "/hq/v1/accounts/";
            case Region.Emea:
                return "/hq/v1/regions/eu/accounts/";
            default:
                return "/hq/v1/accounts/";
        }
    }
}