import * as Yup from "yup";

export const initialValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

// ✅ Validation Schema with Yup
export const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone must be exactly 10 digits")
    .required("Phone is required"),
  message: Yup.string().max(200, "Message must be under 200 characters")
    .required("Message is required"),
});


export const gallery = [
  {
    title: "Learning Activities",
    img: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB8vHMrhL7kT_SSb-45b56PmwHMvuyRhNCTLNZknFtW97THDwPSoiof_D3Y9XwEWX3nrbymyRSrKapesR5OnKRq4pO0aO0lTstESterKMTOgUvZcSAu3d5sq5pJ3p_2ze-TyQrFFSE-p5c3WkSITSfytxhKwYpYDCFVrcANgLEE7tHqfTZ3vw1ScaWAUD6TqpxUQLasPZzNripWDLMZZtouO0EiJxkJJy9nJSzRkOJSw5ny742UWLtdMDR8EnS6NKT-nNfsHed_jclX",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDm11rbYV9CFUNape99U5wzhHia-U8hzEJun9t_oJnhtHfs6IWD5gwHdzaTj7XVuDBncCLljlZxGob2UB_-Rk0bQ3792HkBTVaG1AHKbgqXB4WQivnd65N3uW-Hs15HUv_qqQ7QytcMTS8-VWTF8YAuAiaLGZ0wq4G45UMmDohc4iXPAZM7yUj6hYQ71MhYxdT2WNzZrIsVaDjCB_Lh5nLurFBO70MMzdaN3gtqK2iuzdCVc7nMa-A4xUZr-soPPWMz-IbsV-Cmx8o9",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDrATzcoSRiXlt_X93aCigoUOMZq6Q9LMYwciKV43FVubt0ewnmd2TIY1SQ2pOa8FClez7UMpfvx7lhvajRPh1RLsY16OzGuiT93k1KLrhwPlnZSH_9TQjUv_v7Qo74E05Mytqx-OsCrQZ0ZqVeL78A4V5mHAV7CruevbGuqqEpPXI-o5Giwl8bI3dUh3watV4vaLotMZG5vMIpa3PW4ys6BuuOymWiOtLmosUi2uehkp-F5TfR_lQPst84XyX52teuXGpxmsQGcckz",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCVd01u5U3ipCHoOMN4UftJoLB1PmkRlhHlyfNC5cYDbwKu5dHtx-iJ4f-1hlyQ4y7olEuP6TntWVQt4KaRz6bmcF24BBRD5T_aQcYOMJrWpaKKzgH8no4fP0BwHy0zE8K0IowCglcM3fJHrthUCWPtgq4bPt5JB7GRj278nmeGvBfuizbF0T9JM2_a_x4v5DOtdAkXs8y9Sa-2y7RQdP2_Gzsp3CSQgHiXLM0g4QJ2sOItz5MonY2TPgkjhjPdKCMmblAQ91EYk1q5",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDTGxSOfTOVITdK-oZm2NAz005v1XylXXI3RvcpazHJ1VbK47kytaxJtDdiuFH-iFwmEaGv5CZr1-Juais45iDut38HQXRXQVjz30VNEvMiRfSgkL0cCN-dTWCWb2CxK9s8WE6mtsbU7f8QjfjGsigaUBwIc4Jz41kclARfGPoi1JESpEC1NkMujMemATl5sZA4m8T-fhhsSMVbnuaz9NXh1aHnwTO4tgAv2paAKTrQG0msdP6mdqZxFvtx0_g-AvSO-gePWajMIJIg",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCTYSI0JdcZxE8TdCqJr7KfFnn0GeFn5us_h0em3LUm1A3srO7kf94fcI0oD01b56d2HNzMPnsBIwyvICt4W633TyXOzP7FAEi8oP32kvwhk8HJNOFz8mVdb8yfs9oCIENYHxDo8wQm0G4tMEYJRASSUaq54UDd3fFZu_rEkoLvtQs2LZHWeFd7htZm4vw4w10qzrsYS82kZS0TBXWSKqgh3bvKfai51lw0f_I8TXsJ9QhaaZkaHYbt4kmU0nvrozrKGJ4JyheS93jV",
    ]
  },
  {
    title: "Outdoor Play",
    img: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD2CVu9cr3N1do89UTyqq4Ga1sDYKeP9jplsgdWXvUSyheXLZkqvgT4Ccq11QdaaOiR4kxB5J4qmC25Qw97nAH_HPcNw4t5Z2ncckuip4zZ8nAK4cpMWSdun_j2RJpJ7lzOJIL7ZlgspCaZ1-3wveSROCIpVcusXLIk795ha64U_VBzlNnnLTq8obYE_9-RLzPQ2UMElGsnabMi6eeEJvjv78qvPGtb9thmdfO9Hjv9qgZLDXd2aJq5aF0xsj2c3CvFqBTr0YtfzRcw",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDlfkL6viYFBGJihR-_IpTnG7rCLevR2ftr9lxcRirMOkncnvQlsjTBKwlXmvMIxSrr6HfV2k2OS0iA-QI5z_PcP756IaZUOzMXVMzqIH5lyOIRUREi5v2QKGih1NqFyw2OiyOBDjJ_VXLHUKv05xPT3jnqjr-5Iy6FvlsDDB1sLQmm0vJeOv9y4hC56medqvKjdd4zPrwOiZmJG-uVfM2PC-QV_N9KyrCqADVNh9WQ7xgJSlyiLO8N7aVCMYrGCY-jwmONWXddm_ac",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuChEZPgCNLa85XrPfYyREua583UI7qXwxIecbL6zbYa2JJqnYEsXnHltaLceWuMJ5tthCzeniCIxF3xYslY_FAF4GcTfqy-0ot4JUQLcG_K6_Rjt-lXZJCTPaDs263bWUwlpjOqQciVG0FWmeI_FijZ-3V-fe3_lywrXIhQTHmdzgMlIGTsUm4XAEKTMHvhW4C8f-JvhpvgInltpJcEANGoucPSRuwa-RXrSSY5fnA_-QIaGo6Fp7bkvQeP348C34AXyVopDVKETdDF",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAjIr4uaL0Qkom4AnL0JbN9v5KnNwWUjQypk5P4MRPvz2j6iBAh0_mmDEH6JKSILdJq1Spd45O8Jqz_N9AkXr53bOh3Bj_xbmjiZK1uWmec3yDnXqM0ASyJPXhVPTdfYteKJyt6PEdZ_TmtX_RNtewAwlZsYphFMFeb2LNVRDXPZ_Q_AkDk3Psr8vJFTEGOoeT_OZ07uWTvjhtzSqxWpAgoMKJsH5Znd087t-sPNFajcoVs5-Yd20211L62CO25SDlts-nRrqis9gtZ",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCyaa5dLIXb0BEuf2Y2CUmbiFKlDmVd35euzPOGL0_zd5mhDtrjbXoTx2W6oqyYM8KNoCSTLg0ygR-W-BCnmMY7x7gvOBS46olIt4f19QuZos8HsO8Ga2HfV0TNHKuCgoY6mTK6bUEhNIiAb3d77qUDjvcSFOn7JPUv1yYCa01UmW308bnTMwpM-FYeJYiE1D-Y9QDhLLjwKUNPy4dOAiF_I7CPGwdv-XmnTnx_ZgWRVBgIXKSfkpDUEcC8fsHgnC-3fIAc_brhYQ7g",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDo9Lk_OPn-DVdImSg_AZjnCjE-F0mzKJcJmP1DXMFh-pQx0BCFdrlmtbms0ceX-ykk8_hJXTwdro_BQphsTdtOI9HxG33O3oqOjcANHCNsxATa78_MWxO8mnQ5bBSA7cLgBwobTq3vGPKXMRiuWTUn4sEPPdIblEim1QLNus-A2DsmgW9qwekLeoKbZVhXxFJ8gp9POPS25vjK-j4D80MbCxqbS49_3_xeIw2fAPXDXe8m9vjWQx3-ddjS11YQT-87wRP1lCwnIv8H",
    ]
  },
  {
    title: "Special Events",
    img: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDDcv6_g9yevwPQjX2wkTdgRDtaIT4YdNfuh__7B_3lQcZCmDVHEvYkyyoUl3z6bg7248ag-Nd3985WdHFSnS5InD627izkH0LBYQ1no2BqcxpTKq3JUiIIV6EfhTuA_QcHtuBUN5eEwwhCo0WQzZL25xjBOIV_sNvCkDRKPzzK2NNy_iTdhi8a306aSXl1B0h4FHZdPhDAzg1rHlhDKgAgpgW4SgXbFCbjPk4rF6g_EEVKohTBHGWlzP-EMMRzNAtc3BCy0SdUv29_",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBbMMKteF2lKE8a6FIla-YJxGRe7TZafUvHQgh7VObYaKaPWtb9gWLhncFBpnrTWZAa6txU49mJo3vU219UYmQGSthGrvp_lnjhQ1qd3Qk0l2MXy-_vg_jB8EJbY1hlnxWumhv-vuDb3AiSXlP3bETEoGZDSC7hKeIMOoyVU2SjGKUmLCThJWmA-quaO6HBaqqFUlckJZOvlN0LGC-EHv-tYHsVPzu68MPfJW2apYjns-MuK4xnp1aelRg4pbxpK-27BMscDlwh3SMr",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA7dp3Hk8vF_EIFlVZMRikRemvk0MHqdJz8uZ6lnadtDimFAFnlLNdAitJ2Gy6NzHPR1w_tGZgi3XthnJR6tU4k8TDCYpB7m8GsqkeKUu3PMPoXEW99FuHtFIW-PdCK4ks5ujGg2z_vfzZNHjkVx8aTmRdqrGz_6ttGo016c3G8bspGk7QCETViHiIqJu_lQVDVqVfyPswLTPA3hDTzF-SIHRa_tO1TEHKSCTyPeFDbMDDF3wceoJpS9Nb_XSSN18N0_tnPIyl0HyxW",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCCVmzsmJYDlGGgrAeJpjL9F7xj4WFfnUgSqT51RPcq22_2nfu-fI79K1EPGiCv4d6JIqJd0Kf4EmUfm1llA10P5M9Yjf2YwqA2XyuqD9yPNz3H9SVVueHFoJy6RjIjVsL6sNx6NQxjWGBiORo90BaDTMPCe0aNnxBhem8CVsARlpODgN8EMHio1HN1b2ibfKDYi2B39lymUCu2X6wyCjrm95xr3u7ws3S0r6B5Nn4Mpavw3GRzzfw73Ev6WfdzgJNDkU7VWI4O-G_u",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAgqeniLdBbveZTuLcLvgX6rp-lonqyXyqalfxhHnCDynHTo_xhpbdBkyu3BxpZwSAnOwiYxcQ1RA3-Q6L_zpPxvIjQdsMhQ5NFrMkr4bZD5nw5YZI3hC8RM8eVubZ_ZGllmZhjtTmpq6_mu2WUlgMlpghwTfhNUZxk0ZhvQJ5II6D-UgDbre4mvuXWg5SPvE5q1tBNNNLA7WGpu2Wf1xfobC2WThCobYuh5_hWjo6ok9cShqMPJ7ujK52ZJqVTUwSkJpBIvWnCO_FL",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAKDr_LFritckZg9ipbA1ArxXXa52FgB8BwuYyii-M9XgwGR4CCqbAv11mOcBj2hQURPmxUVDWYPpJdIoRfheZGZTxnEmcLLI_c6Hhdr0Fdt2p6SCewTRQvqMqkAqSk-hFE-2RsRm4rVltyvacE1jShA6kLOcDMVdXsvP0-qm8aKrqNLtMfbvg8hT3NEU9FuePcy1Cjg4dwRYcTpxTGJvH90WXEb8UywYffiMKNvifRNPn12zXl2PQpriwlnK9ZBC80rTAAkhNeRZXv",
    ]
  },
  {
    title: "Nutritional Food Program",
    img:[
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD_TkkfmUiNadgUPecUviKt2qkvy0vGRc3Xov9oD9DTQuKIjcVMNRrvddzk43PDagnpiABpT6f4aPZmy1JwG0mJ6_rDCNWki4nPoRKZ1DMIDmxrZpjS7gUPH7shheHJqey4qpVFrrIBSmGEo0QQJBFl5FyuUCkzPglO9oWmZWLHKghvIU9keBjGUHPnvzP09OjZ-hrh5cLRhghjb8lklFHdNJfzb7YGBRRFSOQajambXUF_vMwzI1diu3s3LsQWJ2rO6XlFBmzC7PkH",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDWmxw05BgjuStUaCwzMDrzEuGa12pt1EopZerRH8Fj6EZKqasMLE6WdRtvDziTxXeXXdxhm7Tw_pUdaNCDBFdf0UT54BF211Hzs24SE2bFKm_WMTBcgXetyfAxWoU-3mXwfPH_xhfP0Tp8gn_xyhqn8-3Abkjm22kPRl9Vnlt1aJZcqoXvyDdbLGcnc2AgXllpF5IhAWUjQZF2PTeYdZwVB3KV0nqX-qGdWynw-NsGrfQOTFIttaOCEdnH50PUM4g62l3STPdnRTaf",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBKStcP15RgQxmZwwoQZJp-pXrmaHpR875bZpLYX5yXe_cH6zsyoUXYsnjC_B4ES1qZgFvjq1bw9t_ozz8gukzMYQNYbRPPm06Re5Zfae-VRHYHjYXkBOYzcdFp9qh_23KY0FdMxQoGrMLXzP7DJnbZeupN_xbiiV_frCtbEtZ6PrLP4Ja_6bXdabEhh0vYbARx8dLza2XNdkBADqg12M0zAS1OQnk0W4jqnoUuRktPbn_0ff2oD3xz90Y0VaK5pXyAMXAziWr7dTqr",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCDUbM_yvPQgIzIKjDJ29wr-5_mu9to3oLRa7i254cU3ibiJb7JZoIf-QjJ9LXdHg-8XKTb7Y9uriNeOzdjFKvtc0OH5Z0nLiDF5O4E_bqXQxcg0kUNGTAK_O4bTu83OupZLofKztk9P3vKfEOGWHfWd-pJL_vJMtyWMJs_Y1c-32CuuvjC_VH00KkRllZloE2kAo5RcknN-tXoVmkjgQtQM-7AiBt_sK6YklS76wAcQTv5MV-GZeDXuQxdSN-xlxLaF6ugmgDvmOLu",

    ]
  },
  {
    title:"Swimming Program",
    img:[
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB6rDYe9urWDKLMcFwYsrRtW8lq0uwVSnPVYn3IJZQKT3RsRGIfqb9ajI6HEimsWt78-7N7j1AfKnUb6qIQ_AAmra_elIl8icHfaj8jf5Gs9eSN15UL535LqV-6GwsuQac1DtoifaKTdzet7nB1AXj2YNSoGLHK6h3T7BT9Da4jfzk8BJFpjgqjI38Kr848skL5kAmq0IDVlhoOJHf0dzW5uPcnijwYTB53uvOsuD4s-ldfH4-mkl58vfQWDslLl-OoDuvEooXVO-d0",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDPzUdkHGIwmCoOm9NpSIzM06EIjhCuky2wB15-0Y0sur4_Eveuhuna324IHqEj8P_bLwCVUPyNWqNsclxZsiQvhKxFhhpqHuCMzbvQqofp8178GoWMcV5kgH0e9t1uFbOir2-KvT62hAF58i2DGozu5odL0eex4scZjw40SQsmShoKno7cJ0WCRbQnpeEh7sraZuAt_FGeHNmzMO4z8Q9Wvf9f1jvD1xytp6-h1x27N817xJjFad5tSwssoo1nn3twPvIUT7iJSKlU",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBLQtanvaXMpHRU6S9SZ6UrxCGdk9liKWJsFXza0a8c-t2jzzEoHrkNvNJiP2q3sE4J7qjg5Qoq4gpvoHb0CxQOmvtSZZ0FIF3GJCO2b8y4GBScjnbg5CVMEIIvNsR2JCimPZPLYe1_fDza4Scd17s-iwSV8yLL5XhW1S4ldmOpzwwb7YG6RkXY9NR-AtqywmpkhXWvUry_aufav_n56_HJzDjloZEOpaLXx2tyhEFkVxMEBliv6Ga6q6lYaVROZ-sVttYPx9GBEZ79",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCaX2r3EZbulnEMBpBQmh6qGEHwdV1qu0i__RRyzM6HTrhxE9zQS2j4bUFqJ7va-KxyOEhSlMAdJf9sTZcAjVasDSOClzWSFrKuKuqgDyfUJY7o3iaFHmaGO-zaDPqQnS9aS6WcjzjJygHynnG9HEOs3a9rNuA5xifmPXzsTghGynXSWwhqysoExWhabZevY946amAHZRTOT8cWFmLcweN2KiZWc2rs-wMQ0gX-_yxAZ0EIThmjnangpvX2YsYz5jMHQwYRVMu-zaSG",
    ]
  },
  {
    title:"Music Program",
    img:[
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDfh3UA6UwZFIGDnzrC57qdVP-68CnxWDX4LGeMl-yNJbtLFCYXhjAwXwVZi2iDT9S6r1xycB2IOWarMTXIhmgobBUc2KMw66AzDQyQ0T6SxRzE_jUgC5UC2Rz--yHnMe_Jd9TMfAGqTbq4HnDZYM287YUhRpc51Pf0CS3nVizHQJbFHS1Cbxa1JUJWiwzQo4FfkIC6Am94cWcbF01_K_UMsIQrgLx-X5WeheZMj90REEwppSv6VB696z6E_j6jSF8S40n-csXfhzLH",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCU4h-hZHUn__NtMgi3RHU5DPKQM9HJAlQYyogJxlJcY_oWaopGx4-VWsM_gnwC3TcUeD4f2nZ97ZQ45VGFs9kR1dUuLdawjJS8XuMFbdp6BKohBUy-ait4nWYm3055R0Gh8gCw-ixWAJLjwDVnoa79OWojMkPdFbIQ3KJ1Cfp8WhLYViKC0RisfN6BpXiCaiNXETSf2BvG3dPTaIJ3p-WdUPdIHaSbEcoljUUQGggr5cFWgLCGQrl14vrt-Ysf1VUzIvyYGOReLiS1",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDnId1YHH2DPw0hBn1esGMWoSfiHTlj0f1uuUmjxDCd402SHoLyQPbkx_QVxyxR7fMnY-jZ8jKB8Fm7YXZ9VD4yGIoYOiK-GRdcO5o14nbHu8gJ2pSS4M0CzDD_ufh9ZsFM5dMu0t8NV9va0wJkZjmvMvGTx2AevVfGGrs09S8wo-2r0zNM1YGYH421quGy8RQqVGGHlm4JnALGq8BfJo5CGLkUaUiYM09b9rWgb_6AppZNUG9uhN85ICLl-BGvptRfzBTygAL9Svkz",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuArkaL3v1_Zo9TT37jeZVMXGzuuZjpD8Yu8BOKBNpZmSByvFSap514celH9BvvEgh3WWfeObfYHIezz5wk_-dUj5O0cwwzrh19qw9I7UGRLi0sw6Mifsekfiwk29TImYyFmQwfPq35ik4cVviTMRfL1iB1VTutsJJReBMxuAAiDVaak53haZercbvwTSO7h5nPPZIluYt3sS2y8MBBfCljX-Z8DpDa5-vryxe0YVB2r4e5b-HVCV45bQr76_Zg2z86t-EvAAYZzKwe2",
    ]
  }
]
