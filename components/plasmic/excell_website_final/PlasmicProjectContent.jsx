/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: dFCW3EJJak7e5FJ1Eb9ZNV
// Component: 3BsgUFPrYose
import * as React from "react";
import { useRouter } from "next/router";
import {
  PlasmicImg as PlasmicImg__,
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  hasVariant
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { useScreenVariants as useScreenVariants_3Kid9VNeHn18 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 3kid9VNeHn18/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: dFCW3EJJak7e5FJ1Eb9ZNV/projectcss
import sty from "./PlasmicProjectContent.module.css"; // plasmic-import: 3BsgUFPrYose/css
import PinIconSvgIcon from "./icons/PlasmicIcon__PinIconSvg"; // plasmic-import: YXldoYY-_JaB/icon

createPlasmicElementProxy;

export const PlasmicProjectContent__VariantProps = new Array();

export const PlasmicProjectContent__ArgProps = new Array("showMonth");

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicProjectContent__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          showMonth: true
        },
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );
  const $props = {
    ...args,
    ...variants
  };
  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_3Kid9VNeHn18()
  });
  return (
    <div
      data-plasmic-name={"content3"}
      data-plasmic-override={overrides.content3}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.content3
      )}
    >
      <Stack__
        as={"div"}
        data-plasmic-name={"col27"}
        data-plasmic-override={overrides.col27}
        hasGap={true}
        className={classNames(projectcss.all, sty.col27)}
      >
        {(() => {
          try {
            return $props.showMonth;
          } catch (e) {
            if (
              e instanceof TypeError ||
              e?.plasmicType === "PlasmicUndefinedDataError"
            ) {
              return true;
            }
            throw e;
          }
        })() ? (
          <div
            data-plasmic-name={"monthContainer4"}
            data-plasmic-override={overrides.monthContainer4}
            className={classNames(projectcss.all, sty.monthContainer4)}
          >
            <h5
              data-plasmic-name={"monthHeading4"}
              data-plasmic-override={overrides.monthHeading4}
              className={classNames(
                projectcss.all,
                projectcss.h5,
                projectcss.__wab_text,
                sty.monthHeading4
              )}
            >
              {"Month"}
            </h5>
          </div>
        ) : null}
        <div
          data-plasmic-name={"project12"}
          data-plasmic-override={overrides.project12}
          className={classNames(projectcss.all, sty.project12)}
        >
          <div
            data-plasmic-name={"container17"}
            data-plasmic-override={overrides.container17}
            className={classNames(projectcss.all, sty.container17)}
          >
            <div
              data-plasmic-name={"projectImg4"}
              data-plasmic-override={overrides.projectImg4}
              className={classNames(projectcss.all, sty.projectImg4)}
            >
              <PlasmicImg__
                data-plasmic-name={"img"}
                data-plasmic-override={overrides.img}
                alt={""}
                className={classNames(sty.img)}
                displayHeight={
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "245px"
                    : "400px"
                }
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"700px"}
                loading={"lazy"}
              />
            </div>
            <div
              data-plasmic-name={"col28"}
              data-plasmic-override={overrides.col28}
              className={classNames(projectcss.all, sty.col28)}
            >
              <div className={classNames(projectcss.all, sty.freeBox__vcik1)}>
                <div className={classNames(projectcss.all, sty.columns__x3Y7A)}>
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.column__dGmgz)}
                  >
                    <h3
                      data-plasmic-name={"projectName4"}
                      data-plasmic-override={overrides.projectName4}
                      className={classNames(
                        projectcss.all,
                        projectcss.h3,
                        projectcss.__wab_text,
                        sty.projectName4
                      )}
                    >
                      {"Project Title"}
                    </h3>
                    <Stack__
                      as={"div"}
                      data-plasmic-name={"projectLoc4"}
                      data-plasmic-override={overrides.projectLoc4}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.projectLoc4)}
                    >
                      <PinIconSvgIcon
                        data-plasmic-name={"locationIcon4"}
                        data-plasmic-override={overrides.locationIcon4}
                        className={classNames(
                          projectcss.all,
                          sty.locationIcon4
                        )}
                        role={"img"}
                      />

                      <h5
                        data-plasmic-name={"locationHeading4"}
                        data-plasmic-override={overrides.locationHeading4}
                        className={classNames(
                          projectcss.all,
                          projectcss.h5,
                          projectcss.__wab_text,
                          sty.locationHeading4
                        )}
                      >
                        {"Project Location"}
                      </h5>
                    </Stack__>
                  </Stack__>
                </div>
              </div>
              <div
                data-plasmic-name={"projectDescriptionContainer4"}
                data-plasmic-override={overrides.projectDescriptionContainer4}
                className={classNames(
                  projectcss.all,
                  sty.projectDescriptionContainer4
                )}
              >
                <div className={classNames(projectcss.all, sty.columns__yuDl7)}>
                  <div
                    className={classNames(projectcss.all, sty.column__au7Cr)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.freeBox__uvEu)}
                    >
                      <div
                        data-plasmic-name={"projectDescription4"}
                        data-plasmic-override={overrides.projectDescription4}
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.projectDescription4
                        )}
                      >
                        {
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident."
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-plasmic-name={"projectDetailsContainer4"}
                data-plasmic-override={overrides.projectDetailsContainer4}
                className={classNames(
                  projectcss.all,
                  sty.projectDetailsContainer4
                )}
              >
                <div
                  data-plasmic-name={"projectDetails4"}
                  data-plasmic-override={overrides.projectDetails4}
                  className={classNames(projectcss.all, sty.projectDetails4)}
                >
                  <div
                    data-plasmic-name={"kWpContainer4"}
                    data-plasmic-override={overrides.kWpContainer4}
                    className={classNames(projectcss.all, sty.kWpContainer4)}
                  >
                    <Stack__
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__vg7Bv)}
                    >
                      <h3
                        data-plasmic-name={"kWpNumber4"}
                        data-plasmic-override={overrides.kWpNumber4}
                        className={classNames(
                          projectcss.all,
                          projectcss.h3,
                          projectcss.__wab_text,
                          sty.kWpNumber4
                        )}
                      >
                        {"0"}
                      </h3>
                      <div
                        data-plasmic-name={"kWpLabel4"}
                        data-plasmic-override={overrides.kWpLabel4}
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.kWpLabel4
                        )}
                      >
                        {"Kilowatt Peak"}
                      </div>
                    </Stack__>
                  </div>
                  <div
                    data-plasmic-name={"solarFractionContainer4"}
                    data-plasmic-override={overrides.solarFractionContainer4}
                    className={classNames(
                      projectcss.all,
                      sty.solarFractionContainer4
                    )}
                  >
                    <Stack__
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__mcJlp)}
                    >
                      <h3
                        data-plasmic-name={"solarFractionNumber4"}
                        data-plasmic-override={overrides.solarFractionNumber4}
                        className={classNames(
                          projectcss.all,
                          projectcss.h3,
                          projectcss.__wab_text,
                          sty.solarFractionNumber4
                        )}
                      >
                        {"0%"}
                      </h3>
                      <div
                        data-plasmic-name={"solarFractionLabel4"}
                        data-plasmic-override={overrides.solarFractionLabel4}
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.solarFractionLabel4
                        )}
                      >
                        {"Solar Fraction"}
                      </div>
                    </Stack__>
                  </div>
                  <div
                    data-plasmic-name={"roiOrSavingsContainer4"}
                    data-plasmic-override={overrides.roiOrSavingsContainer4}
                    className={classNames(
                      projectcss.all,
                      sty.roiOrSavingsContainer4
                    )}
                  >
                    <Stack__
                      as={"div"}
                      hasGap={true}
                      className={classNames(
                        projectcss.all,
                        sty.freeBox___2LeHw
                      )}
                    >
                      <h3
                        data-plasmic-name={"roiOrSavingsNumber4"}
                        data-plasmic-override={overrides.roiOrSavingsNumber4}
                        className={classNames(
                          projectcss.all,
                          projectcss.h3,
                          projectcss.__wab_text,
                          sty.roiOrSavingsNumber4
                        )}
                      >
                        {"0"}
                      </h3>
                      <div
                        data-plasmic-name={"roiOrSavingsLabel4"}
                        data-plasmic-override={overrides.roiOrSavingsLabel4}
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.roiOrSavingsLabel4
                        )}
                      >
                        {"ROI/Savings"}
                      </div>
                    </Stack__>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Stack__>
    </div>
  );
}

const PlasmicDescendants = {
  content3: [
    "content3",
    "col27",
    "monthContainer4",
    "monthHeading4",
    "project12",
    "container17",
    "projectImg4",
    "img",
    "col28",
    "projectName4",
    "projectLoc4",
    "locationIcon4",
    "locationHeading4",
    "projectDescriptionContainer4",
    "projectDescription4",
    "projectDetailsContainer4",
    "projectDetails4",
    "kWpContainer4",
    "kWpNumber4",
    "kWpLabel4",
    "solarFractionContainer4",
    "solarFractionNumber4",
    "solarFractionLabel4",
    "roiOrSavingsContainer4",
    "roiOrSavingsNumber4",
    "roiOrSavingsLabel4"
  ],

  col27: [
    "col27",
    "monthContainer4",
    "monthHeading4",
    "project12",
    "container17",
    "projectImg4",
    "img",
    "col28",
    "projectName4",
    "projectLoc4",
    "locationIcon4",
    "locationHeading4",
    "projectDescriptionContainer4",
    "projectDescription4",
    "projectDetailsContainer4",
    "projectDetails4",
    "kWpContainer4",
    "kWpNumber4",
    "kWpLabel4",
    "solarFractionContainer4",
    "solarFractionNumber4",
    "solarFractionLabel4",
    "roiOrSavingsContainer4",
    "roiOrSavingsNumber4",
    "roiOrSavingsLabel4"
  ],

  monthContainer4: ["monthContainer4", "monthHeading4"],
  monthHeading4: ["monthHeading4"],
  project12: [
    "project12",
    "container17",
    "projectImg4",
    "img",
    "col28",
    "projectName4",
    "projectLoc4",
    "locationIcon4",
    "locationHeading4",
    "projectDescriptionContainer4",
    "projectDescription4",
    "projectDetailsContainer4",
    "projectDetails4",
    "kWpContainer4",
    "kWpNumber4",
    "kWpLabel4",
    "solarFractionContainer4",
    "solarFractionNumber4",
    "solarFractionLabel4",
    "roiOrSavingsContainer4",
    "roiOrSavingsNumber4",
    "roiOrSavingsLabel4"
  ],

  container17: [
    "container17",
    "projectImg4",
    "img",
    "col28",
    "projectName4",
    "projectLoc4",
    "locationIcon4",
    "locationHeading4",
    "projectDescriptionContainer4",
    "projectDescription4",
    "projectDetailsContainer4",
    "projectDetails4",
    "kWpContainer4",
    "kWpNumber4",
    "kWpLabel4",
    "solarFractionContainer4",
    "solarFractionNumber4",
    "solarFractionLabel4",
    "roiOrSavingsContainer4",
    "roiOrSavingsNumber4",
    "roiOrSavingsLabel4"
  ],

  projectImg4: ["projectImg4", "img"],
  img: ["img"],
  col28: [
    "col28",
    "projectName4",
    "projectLoc4",
    "locationIcon4",
    "locationHeading4",
    "projectDescriptionContainer4",
    "projectDescription4",
    "projectDetailsContainer4",
    "projectDetails4",
    "kWpContainer4",
    "kWpNumber4",
    "kWpLabel4",
    "solarFractionContainer4",
    "solarFractionNumber4",
    "solarFractionLabel4",
    "roiOrSavingsContainer4",
    "roiOrSavingsNumber4",
    "roiOrSavingsLabel4"
  ],

  projectName4: ["projectName4"],
  projectLoc4: ["projectLoc4", "locationIcon4", "locationHeading4"],
  locationIcon4: ["locationIcon4"],
  locationHeading4: ["locationHeading4"],
  projectDescriptionContainer4: [
    "projectDescriptionContainer4",
    "projectDescription4"
  ],

  projectDescription4: ["projectDescription4"],
  projectDetailsContainer4: [
    "projectDetailsContainer4",
    "projectDetails4",
    "kWpContainer4",
    "kWpNumber4",
    "kWpLabel4",
    "solarFractionContainer4",
    "solarFractionNumber4",
    "solarFractionLabel4",
    "roiOrSavingsContainer4",
    "roiOrSavingsNumber4",
    "roiOrSavingsLabel4"
  ],

  projectDetails4: [
    "projectDetails4",
    "kWpContainer4",
    "kWpNumber4",
    "kWpLabel4",
    "solarFractionContainer4",
    "solarFractionNumber4",
    "solarFractionLabel4",
    "roiOrSavingsContainer4",
    "roiOrSavingsNumber4",
    "roiOrSavingsLabel4"
  ],

  kWpContainer4: ["kWpContainer4", "kWpNumber4", "kWpLabel4"],
  kWpNumber4: ["kWpNumber4"],
  kWpLabel4: ["kWpLabel4"],
  solarFractionContainer4: [
    "solarFractionContainer4",
    "solarFractionNumber4",
    "solarFractionLabel4"
  ],

  solarFractionNumber4: ["solarFractionNumber4"],
  solarFractionLabel4: ["solarFractionLabel4"],
  roiOrSavingsContainer4: [
    "roiOrSavingsContainer4",
    "roiOrSavingsNumber4",
    "roiOrSavingsLabel4"
  ],

  roiOrSavingsNumber4: ["roiOrSavingsNumber4"],
  roiOrSavingsLabel4: ["roiOrSavingsLabel4"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicProjectContent__ArgProps,
          internalVariantPropNames: PlasmicProjectContent__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicProjectContent__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "content3") {
    func.displayName = "PlasmicProjectContent";
  } else {
    func.displayName = `PlasmicProjectContent.${nodeName}`;
  }
  return func;
}

export const PlasmicProjectContent = Object.assign(
  // Top-level PlasmicProjectContent renders the root element
  makeNodeComponent("content3"),
  {
    // Helper components rendering sub-elements
    col27: makeNodeComponent("col27"),
    monthContainer4: makeNodeComponent("monthContainer4"),
    monthHeading4: makeNodeComponent("monthHeading4"),
    project12: makeNodeComponent("project12"),
    container17: makeNodeComponent("container17"),
    projectImg4: makeNodeComponent("projectImg4"),
    img: makeNodeComponent("img"),
    col28: makeNodeComponent("col28"),
    projectName4: makeNodeComponent("projectName4"),
    projectLoc4: makeNodeComponent("projectLoc4"),
    locationIcon4: makeNodeComponent("locationIcon4"),
    locationHeading4: makeNodeComponent("locationHeading4"),
    projectDescriptionContainer4: makeNodeComponent(
      "projectDescriptionContainer4"
    ),
    projectDescription4: makeNodeComponent("projectDescription4"),
    projectDetailsContainer4: makeNodeComponent("projectDetailsContainer4"),
    projectDetails4: makeNodeComponent("projectDetails4"),
    kWpContainer4: makeNodeComponent("kWpContainer4"),
    kWpNumber4: makeNodeComponent("kWpNumber4"),
    kWpLabel4: makeNodeComponent("kWpLabel4"),
    solarFractionContainer4: makeNodeComponent("solarFractionContainer4"),
    solarFractionNumber4: makeNodeComponent("solarFractionNumber4"),
    solarFractionLabel4: makeNodeComponent("solarFractionLabel4"),
    roiOrSavingsContainer4: makeNodeComponent("roiOrSavingsContainer4"),
    roiOrSavingsNumber4: makeNodeComponent("roiOrSavingsNumber4"),
    roiOrSavingsLabel4: makeNodeComponent("roiOrSavingsLabel4"),
    // Metadata about props expected for PlasmicProjectContent
    internalVariantProps: PlasmicProjectContent__VariantProps,
    internalArgProps: PlasmicProjectContent__ArgProps
  }
);

export default PlasmicProjectContent;
/* prettier-ignore-end */
