using System.Web;
using System.Web.Optimization;

namespace AminalsWeb
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/node_modules/jquery/dist/jquery.js"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/node_modules/bootstrap/dist/js/bootstrap.js"));

            bundles.Add(new ScriptBundle("~/bundles/main").Include(
                "~/node_modules/knockout/build/output/knockout-latest.debug.js",
                "~/Scripts/Custom/main.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/node_modules/bootstrap/dist/css/bootstrap.css",
                      "~/Content/site.css"));
        }
    }
}
