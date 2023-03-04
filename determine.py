# everything below this line is written by Sam, just copying this here from the Discord #
# ===================================================================================== #

#sams garbo algo
#input takes in 8 characters corresponding to whether person enjoys (in order):
#punk jazz classical rock alt rock reggae ambient pop metal hippop edm blues country
#sample input "TTFTTFTF"

def MBTI(self, s: str) -> str:

    ret = ""
    E = 0
    I = 0
    N = 0
    S = 0 
    T = 0
    F = 0 
    J = 0
    P = 0

    data = {{40.19,44.47,44.86,34.04,44.41,42.57,37.01,47.78},
    {59.36,50.94,54.35,45.71,52.94,53.29,51.22,54.48},
    {70.63,72.49,73.71,61.46,74.13,70.43,74.16,70.5},
    {76.69,78.87,79.98,67.96,79.26,77.59,74.48,80.96},
    {80.5,81.49,82.3,74.68,78.41,83.3,77.78,83.63},
    {36.91,28.37,30.67,30.19,27.33,33.03,27.68,32.64},
    {57.48,54.85,56.4,50.25,51.85,58.26,51.97,58.02},
    {73.58,63.6,65.11,72.95,57.26,72.79,66.11,66.28},
    {30.73,39.32,38.61,27.57,42.47,33.1,32.12,40.53},
    {54.84,41.32,45.11,43.41,43.66,45.76,41.84,46.97},
    {70.54,61.32,64.33,60.48,61.5,65.47,60.71,65.92},
    {48.83,41.43,44.57,35.99,41.21,44.97,41.26,44.84},
    {39.13,32.22,32.89,41.03,28.79,37.89,34.55,33.67}}

    for i in range (len(s)):
        if s[i] == 'T':
            E += data[i][0]
            I += data[i][1]
            N += data[i][2]
            S += data[i][3]
            T += data[i][4]
            F += data[i][5]
            J += data[i][6]
            P += data[i][7]
        else:  
            E += 100 - data[i][0]
            I += 100 - data[i][1]
            N += 100 - data[i][2]
            S += 100 - data[i][3]
            T += 100 - data[i][4]
            F += 100 - data[i][5]
            J += 100 - data[i][6]
            P += 100 - data[i][7]

    if E>I:
        ret += E
    else:
        ret += I
    
    if N>S:
        ret += N
    else:
        ret += S

    if T>F:
        ret += T
    else:
        ret += F

    if J>P:
        ret += J
    else:
        ret += P

    return ret
    