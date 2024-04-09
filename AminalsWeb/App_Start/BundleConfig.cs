using System.Web;
using System.Web.Optimization;

namespace AminalsWeb
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/core").Include(
                "~/node_modules/jquery/dist/jquery.js",
                "~/node_modules/jquery-migrate/dist/jquery-migrate.js",
                "~/node_modules/knockout/build/output/knockout-latest.debug.js",
                "~/node_modules/knockout-mapping/dist/knockout.mapping.js"));

            bundles.Add(new ScriptBundle("~/bundles/webmidi")
                .Include("~/node_modules/webmidi/dist/esm/webmidi.esm.js"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap")
                .Include("~/node_modules/bootstrap/dist/js/bootstrap.js"));

            bundles.Add(new ScriptBundle("~/bundles/midi")
                .Include("~/node_modules/webmidi/dist/esm/webmidi.esm.js"));

            bundles.Add(new ScriptBundle("~/bundles/main")
                .Include("~/Scripts/Custom/main.js"));
            
            bundles.Add(new ScriptBundle("~/bundles/controller")
                .Include("~/Scripts/Custom/ViewModels/ControllerEditor.js"));

            bundles.Add(new StyleBundle("~/Content/css")
                .Include(
                    "~/node_modules/bootstrap/dist/css/bootstrap.css",
                    "~/Content/site.css"));
        }
    }
}
